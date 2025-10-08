import Image from "next/image";

export default function SportsStudied() {
    const sportsData = [
        {
            id: "alergare",
            name: "Alergare",
            description: "Competiții de șosea & trail",
            image: "https://plus.unsplash.com/premium_photo-1664304823165-888f56fc101b?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Sportivi alergând pe șosea în cadrul unei competiții de anduranță din România - Endurance Ro-Index studiu 2025"
        },
        {
            id: "ciclism",
            name: "Ciclism",
            description: "Curse MTB/trail & de șosea",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1974&auto=format&fit=crop",
            alt: "Cicliști participând la o competiție de ciclism în România - studiu Endurance Ro-Index 2025"
        },
        {
            id: "triatlon",
            name: "Triatlon",
            description: "Competiții combinate de înot, ciclism și alergare",
            image: "https://plus.unsplash.com/premium_photo-1661964408302-d88b6e98322a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Triatleți în tranziția de la înot la ciclism în cadrul unei competiții de triatlon din România - Endurance Ro-Index"
        }
    ];
    return (
        <section id="sporturi" className="py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f3e5e]">
                    Sporturi Studiate
                </h2>
                <p className="mt-4 text-center text-lg text-[#0f3e5e]">
                    Trei discipline de anduranță care definesc comunitatea sportivă din România
                </p>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {sportsData.map((sport) => (
                        <article key={sport.id} className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                            <div className="relative h-72 w-full">
                                <Image
                                    src={sport.image}
                                    alt={sport.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    title={`${sport.name} - Sporturi studiate în Endurance Ro-Index`}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute left-6 right-6 bottom-6 text-white">
                                <h3 className="text-3xl font-bold drop-shadow">{sport.name}</h3>
                                <p className="mt-2 text-white/90 drop-shadow">
                                    {sport.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


