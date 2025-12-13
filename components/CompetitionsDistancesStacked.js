import Image from "next/image";

const slides = [
    "/infographics/IMG-20250918-WA0001.jpg",
    "/infographics/IMG-20250918-WA0004.jpg",
    "/infographics/IMG-20250918-WA0003.jpg",
];

export default function CompetitionsDistancesStacked() {
    return (
        <section id="tip-competitii-distante" className="py-24 bg-white">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl pb-8 font-extrabold tracking-tight text-[#0f3e5e]">
                    Tip de competiții & distanțe
                </h2>

                <div className="mt-6 mx-auto max-w-4xl space-y-10">
                    {slides.map((src) => (
                        <div key={src} className="flex items-center justify-center">
                            <div className="w-full rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={src}
                                        alt="Infografic competiții și distanțe"
                                        width={1600}
                                        height={1200}
                                        className="w-full h-auto object-contain"
                                        priority={false}
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


