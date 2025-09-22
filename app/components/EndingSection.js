"use client";
import { Globe } from "lucide-react";
import { useState } from "react";
import { ClipboardList } from "lucide-react";
import RequestStudyDialog from "./RequestStudyDialog";

export default function EndingSection() {
    const [open, setOpen] = useState(false);
    const organizers = [
        "ACS Club 21",
        "ACS Echipmont",
        "ACS Fara Asfalt",
        "Asociatia Club Sportiv Pro Cycling",
        "Bikexpert",
        "CS Alergotura",
        "FC Galati",
        "Fundatia Comunitara Sibiu",
        "Mures Runners",
        "Runners Club",
        "Running Media",
        "Salvati Copii Iasi",
        "Smartatletic",
        "Team Run",
        "YOLO Events",
    ];
    return (
        <section className="relative w-full isolate overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img
                    // src="https://images.unsplash.com/photo-1520975922284-9e0ce82759a5?q=80&w=2070&auto=format&fit=crop"
                    src="https://images.unsplash.com/photo-1627156399021-721b0f720f8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Atleți pe pistă"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-slate-800/30" />
            </div>

            <div className="mx-auto max-w-6xl px-6 sm:px-8 py-24 text-white">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Misiunea Studiului
                </h2>
                <p className="mt-6 text-center max-w-3xl mx-auto text-lg sm:text-xl text-white/90">
                    Endurance Ro-Index își propune să devină un reper pentru ecosistemul sporturilor de masă din România: o sursă de încredere pentru date, un instrument folositor organizatorilor de concursuri și un barometru al fenomenului sportiv.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold">Sursă de Încredere</h3>
                        <p className="mt-2 text-white/90">O platformă de know-how care ajută organizatorii și tot ecosistemul din jurul concursurilor. Aduce date pe agenda publică despre fenomenul sportului de masă.</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold">Barometru de Sport</h3>
                        <p className="mt-2 text-white/90">Contribuie la creșterea fenomenului, un adevărat barometru de competitivitate și sănătate națională.</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold">Instrument de Sustenabilitate</h3>
                        <p className="mt-2 text-white/90">Deschizător de drumuri pentru idei noi, branding sănătos și comunicare relevantă.</p>
                    </div>
                </div>

                <h3 className="mt-14 text-center text-2xl sm:text-3xl font-bold">Inițiatorii Endurance Ro-Index</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-between">
                        <div>
                            <p className="text-lg font-semibold">Quantix Marketing Consulting</p>
                            <p className="text-white/90">Agenția de cercetare care coordonează studiul</p>
                        </div>
                        <a
                            href="https://quantix.ro"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 hover:bg-white/25"
                            aria-label="Deschide quantix.ro"
                        >
                            <Globe className="size-6" />
                        </a>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-between">
                        <div>
                            <p className="text-lg font-semibold">SportID</p>
                            <p className="text-white/90">Platformă sportivă care susține inițiativa</p>
                        </div>
                        <a
                            href="https://sportid.ro"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 hover:bg-white/25"
                            aria-label="Deschide sportid.ro"
                        >
                            <Globe className="size-6" />
                        </a>
                    </div>
                </div>

                <h3 className="mt-14 text-center text-2xl sm:text-3xl font-bold">Parteneri Organizatori de Competiții</h3>
                <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4" aria-label="Parteneri organizatori de competiții">
                    {organizers.map((name) => (
                        <li
                            key={name}
                            title={name}
                            className="rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm px-4 py-2 min-h-16 flex items-center justify-center text-center leading-tight text-sm sm:text-base text-white/90"
                        >
                            {name}
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#6599b2] px-6 py-3 text-base font-semibold text-white hover:bg-[#1ab6ce]/90"
                    >
                        <ClipboardList className="size-5" aria-hidden />
                        Solicită Raportul
                    </button>
                </div>
            </div>
            <RequestStudyDialog isOpen={open} onClose={() => setOpen(false)} />
        </section>
    );
}


