import Image from "next/image";

export default function ParticipantsProfileStacked() {
    const slides = [
        "/infographics/Endurance_Ro-Index2025_export-1.jpg",
        "/infographics/Endurance_Ro-Index2025_export-4.jpg",
    ];

    return (
        <section id="profil" className="py-24">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f3e5e]">
                    Profilul Participanților
                </h2>
                <p className="mt-4 text-center text-lg text-[#0f3e5e]">
                    la concursuri de alergare, ciclism și triatlon din România sau străinătate
                </p>

                <div className="mt-10 mx-auto max-w-4xl space-y-10">
                    {slides.map((src) => (
                        <div key={src} className="flex items-center justify-center">
                            <div className="w-full rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={src}
                                        alt="Profilul participanților - infografic"
                                        width={1600}
                                        height={2000}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


