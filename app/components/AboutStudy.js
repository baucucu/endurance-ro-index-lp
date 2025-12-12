import { Users, HeartPulse, CalendarDays, Trophy, Building2, Megaphone } from "lucide-react";

export default function AboutStudy() {
    return (
        <section id="despre" className="py-24 bg-gradient-to-b from-sky-50 to-white">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f3e5e]">
                    Despre Endurance Ro-Index 2025
                </h2>
                <p className="mt-6 text-center text-lg text-[#0f3e5e] max-w-4xl mx-auto">
                    Ediția de lansare din 2025 a evaluat participarea și concurenții la evenimentele din 2024 și surprinde perspective utile pentru toți actorii implicați- organizatorii curselor, sponsori ai evenimentelor, branduri și industrii cointeresate, presa de specialitate sport-lifestyle-sănătate, sau autorități. Studiul se va desfășura anual.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Users className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">1.110</p>
                        <p className="mt-2 text-center text-slate-600">concurenți</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <HeartPulse className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">3 Sporturi</p>
                        <p className="mt-2 text-center text-slate-600">Alergare, Ciclism, Triatlon</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-fuchsia-50 text-fuchsia-600">
                            <CalendarDays className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">2024</p>
                        <p className="mt-2 text-center text-slate-600">Anul evaluat în studiul din 2025</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                            <Trophy className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">54</p>
                        <p className="mt-2 text-center text-slate-600">concursuri promptate</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                            <Building2 className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">242</p>
                        <p className="mt-2 text-center text-slate-600">branduri/companii relevante</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                            <Megaphone className="size-7" aria-hidden />
                        </div>
                        <p className="mt-6 text-center text-3xl font-extrabold">36</p>
                        <p className="mt-2 text-center text-slate-600">influenceri</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
