"use client";
import { useState } from "react";
import { CalendarDays, BarChart2, ClipboardList } from "lucide-react";
import RequestStudyDialog from "./RequestStudyDialog";

export default function Hero() {
    const [requestOpen, setRequestOpen] = useState(false);
    function scrollToDespre(e) {
        e.preventDefault();
        const el = document.getElementById("despre");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (
        <section className="relative w-full min-h-[80vh] isolate overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img
                    // src="https://images.unsplash.com/photo-1588038265723-9bd2a2b03a82?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sportivi alergând pe lângă lac"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/70 via-slate-900/50 to-emerald-900/40" />
            </div>

            <div className="absolute right-4 top-4 z-10 flex flex-col sm:flex-row gap-2 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm ring-1 ring-white/20 backdrop-blur-sm">
                    Organizatori de concursuri de masă
                    <a href="tel:0741040219" className="font-semibold text-white">0741.040.219</a>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm ring-1 ring-white/20 backdrop-blur-sm">
                    Parteneri ai Endurance & Comercial
                    <a href="tel:0724534232" className="font-semibold text-white">0724.534.232</a>
                </span>
            </div>

            <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-28 pb-20 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/25 backdrop-blur-md">
                    <CalendarDays className="size-4" aria-hidden />
                    Studiu de cercetare 2025
                </span>

                <h1 className="mt-6 leading-tight">
                    {/* <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                        AMBASADORI
                    </span> */}
                    <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl font-extrabold text-white-90 opacity-80">
                        Endurance Ro-Index
                    </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg sm:text-xl text-white/90">
                    Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#despre"
                        onClick={scrollToDespre}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-base font-semibold text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/20"
                    >
                        <BarChart2 className="size-5" aria-hidden />
                        Explorează Rezultatele
                    </a>

                    <button
                        type="button"
                        onClick={() => setRequestOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#6599b2] px-5 py-3 text-base font-semibold text-white hover:bg-[#1ab6ce]/90"
                    >
                        <ClipboardList className="size-5" aria-hidden />
                        Solicită Raportul
                    </button>
                </div>
            </div>

            <RequestStudyDialog isOpen={requestOpen} onClose={() => setRequestOpen(false)} />
        </section>
    );
}


