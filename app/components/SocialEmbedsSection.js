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
                        .map((html) => {
                            // remove embedded IG script tag if present; we load it separately
                            const cleaned = String(html).replace(/<script[^>]*instagram\.com\/embed\.js[\s\S]*?<\/script>/gi, "");
                            return { platform: tab.toLowerCase(), html: cleaned };
                        });
                    results.push(...rows);
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error("Failed to load tab", tab, e);
                }
            }
            setPosts(results);
        }
        fetchTabs();
    }, [sheetId]);

    useEffect(() => {
        // Re-process embeds after posts render
        if (typeof window !== "undefined") {
            // Instagram
            if (window.instgrm?.Embeds?.process) {
                window.instgrm.Embeds.process();
            }
            // Facebook
            if (window.FB?.XFBML?.parse) {
                window.FB.XFBML.parse(containerRef.current || undefined);
            }
            // Make iframes responsive
            const iframes = containerRef.current?.querySelectorAll("iframe") || [];
            iframes.forEach((el) => {
                el.style.width = "100%";
                el.removeAttribute("width");
            });
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
                            <div className="columns-2xs md:columns-3 gap-4 [column-fill:_balance]">
                                {igPosts.map((p, idx) => (
                                    <div key={`ig-${idx}`} className="mx-auto mb-4 w-full max-w-[16rem] sm:max-w-[18rem] break-inside-avoid">
                                        <div dangerouslySetInnerHTML={{ __html: p.html }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {fbPosts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Facebook</h3>
                            <div className="columns-2xs md:columns-3 gap-4 [column-fill:_balance]">
                                {fbPosts.map((p, idx) => (
                                    <div key={`fb-${idx}`} className="mx-auto mb-4 w-full max-w-[16rem] sm:max-w-[18rem] break-inside-avoid">
                                        <div dangerouslySetInnerHTML={{ __html: p.html }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


