"use client";
import { useEffect, useMemo, useRef, useState } from "react";

function loadScriptOnce(src, id) {
    if (id && document.getElementById(id)) return;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.defer = true;
    if (id) s.id = id;
    document.body.appendChild(s);
}

function parseGviz(text) {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;
    if (start === -1 || end === -1) return null;
    try {
        return JSON.parse(text.slice(start, end));
    } catch (e) {
        return null;
    }
}

export default function SocialEmbedsSection({
    sheetId = process.env.NEXT_PUBLIC_SOCIAL_SHEET_ID,
}) {
    const [posts, setPosts] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        // Load Instagram and Facebook embed scripts once
        loadScriptOnce("https://www.instagram.com/embed.js", "ig-embed-js");
        // FB SDK requires a root element
        if (!document.getElementById("fb-root")) {
            const root = document.createElement("div");
            root.id = "fb-root";
            document.body.prepend(root);
        }

        // Initialize Facebook SDK with error handling
        window.fbAsyncInit = function () {
            if (window.FB) {
                window.FB.init({
                    xfbml: true,
                    version: 'v17.0'
                });
                console.log("Facebook SDK initialized");
            }
        };

        loadScriptOnce(
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0",
            "fb-sdk-js"
        );
    }, []);

    useEffect(() => {
        async function fetchTabs() {
            if (!sheetId) return;
            const tabs = ["Instagram", "Facebook"]; // expected sheet names
            const results = [];
            for (const tab of tabs) {
                const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
                    tab
                )}`;
                try {
                    const res = await fetch(url, { cache: "no-store" });
                    const txt = await res.text();
                    const json = parseGviz(txt);
                    if (!json?.table?.rows) continue;
                    const rows = json.table.rows
                        .map((r) => r.c?.[0]?.v)
                        .filter(Boolean)
                        .map((rawHtml) => {
                            // Always work with a string
                            let html = String(rawHtml).trim();

                            // Remove embedded IG script tag if present; we load it once globally
                            html = html.replace(/<script[^>]*instagram\.com\/embed\.js[\s\S]*?<\/script>/gi, "");

                            const platform = tab.toLowerCase();

                            // Normalize Facebook: Accept either iframe plugin code or div.fb-post and rebuild a canonical iframe
                            if (platform === "facebook") {
                                try {
                                    let postUrl = "";

                                    // 1) If it's an iframe embed, extract the href parameter from src
                                    const iframeSrcMatch = html.match(/<iframe[^>]*src="([^"]+)"/i);
                                    if (iframeSrcMatch) {
                                        const srcUrl = new URL(iframeSrcMatch[1]);
                                        const hrefParam = srcUrl.searchParams.get("href");
                                        if (hrefParam) postUrl = decodeURIComponent(hrefParam);
                                    }

                                    // 2) If it's an XFBML div embed, extract data-href
                                    if (!postUrl) {
                                        const dataHrefMatch = html.match(/data-href="([^"]+)"/i);
                                        if (dataHrefMatch) postUrl = dataHrefMatch[1];
                                    }

                                    // 3) If it's a plain URL pasted, use it as-is
                                    if (!postUrl) {
                                        const plainUrlMatch = html.match(/https?:\/\/[\w\-.]+\.[^"'\s<>)]+/i);
                                        if (plainUrlMatch) postUrl = plainUrlMatch[0];
                                    }

                                    if (postUrl) {
                                        const canonical = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                                            postUrl
                                        )}&show_text=true&width=500`;
                                        html = `<iframe src="${canonical}" width="500" height="420" style="border:none;overflow:hidden;width:100%;max-width:500px;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
                                    }
                                } catch (err) {
                                    console.warn("Failed to normalize Facebook embed", err);
                                }
                            }

                            return { platform, html };
                        });
                    results.push(...rows);
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error("Failed to load tab", tab, e);
                }
            }
            console.log("Loaded posts:", results);
            setPosts(results);
        }
        fetchTabs();
    }, [sheetId]);

    useEffect(() => {
        // Re-process embeds after posts render
        if (typeof window !== "undefined") {
            setTimeout(() => {
                // Instagram
                if (window.instgrm?.Embeds?.process) {
                    console.log("Processing Instagram embeds...");
                    window.instgrm.Embeds.process();
                }
                // Facebook XFBML embeds (for div-based embeds)
                if (window.FB?.XFBML?.parse) {
                    console.log("Processing Facebook XFBML embeds...");
                    window.FB.XFBML.parse(containerRef.current || undefined);
                }
                // Handle Facebook iframe embeds (they don't need FB SDK processing)
                const fbIframes = containerRef.current?.querySelectorAll("iframe[src*='facebook.com']") || [];
                console.log(`Found ${fbIframes.length} Facebook iframe embeds`);

                // Make all iframes responsive
                const allIframes = containerRef.current?.querySelectorAll("iframe") || [];
                console.log(`Found ${allIframes.length} total iframes to make responsive`);
                allIframes.forEach((el) => {
                    el.style.width = "100%";
                    el.style.maxWidth = "500px";
                    el.removeAttribute("width");
                });
            }, 1000);
        }
    }, [posts]);

    const helperPosts = useMemo(() => posts, [posts]);

    if (!sheetId) {
        return (
            <section id="social" className="py-24">
                <div className="mx-auto max-w-6xl px-6 sm:px-8">
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">Postări din Social Media</h2>
                    <p className="mt-4 text-center text-lg text-slate-600">
                        Configurează variabila de mediu <code>NEXT_PUBLIC_SOCIAL_SHEET_ID</code> cu ID-ul Google Sheet-ului public
                        (coloane: <code>url</code>, opțional <code>platform</code>), apoi reîncarcă pagina.
                    </p>
                </div>
            </section>
        );
    }

    const igPosts = helperPosts.filter((p) => p.platform === "instagram");
    const fbPosts = helperPosts.filter((p) => p.platform === "facebook");

    if (igPosts.length === 0 && fbPosts.length === 0) {
        return null;
    }

    return (
        <section id="social" className="py-24">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">Postări din Social Media</h2>
                <p className="mt-4 text-center text-lg text-slate-600">Selectate de pe Instagram și Facebook</p>

                <div ref={containerRef}>
                    {igPosts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Instagram</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                                {igPosts.map((p, idx) => (
                                    <div key={`ig-${idx}`} className="w-full grid place-items-center">
                                        <div className="embed-card w-full max-w-[22rem] px-2" dangerouslySetInnerHTML={{ __html: p.html }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {fbPosts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Facebook</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                                {fbPosts.map((p, idx) => (
                                    <div key={`fb-${idx}`} className="w-full grid place-items-center">
                                        <div className="embed-card w-full max-w-[22rem] px-2" dangerouslySetInnerHTML={{ __html: p.html }} />
                                    </div>
                                ))}
                            </div>

                            <style jsx global>{`
                    /* Ensure IG and FB embeds don't overflow and are centered */
                    #social .embed-card { margin-left: auto; margin-right: auto; }
                    #social .embed-card iframe { width: 100% !important; max-width: 100% !important; }
                    #social .embed-card blockquote.instagram-media { width: 100% !important; max-width: 100% !important; min-width: 0 !important; margin: 0 auto !important; }
                    #social .embed-card blockquote.instagram-media * { max-width: 100% !important; }
                `}</style>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


