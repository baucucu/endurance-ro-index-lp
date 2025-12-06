import Image from "next/image";

function StackedSection({ title, images }) {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl pb-8 font-extrabold tracking-tight text-[#0f3e5e]">
                    {title}
                </h2>
                <div className="mt-6 mx-auto max-w-4xl space-y-10">
                    {images.map((src) => (
                        <div key={src} className="flex items-center justify-center">
                            <div className="w-full rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={src}
                                        alt={title}
                                        width={1600}
                                        height={1200}
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

export default function MindsetStackedSections() {
    return (
        <div>
            <StackedSection
                title="Mindset"
                images={[
                    "/infographics/IMG-20250918-WA0002.jpg",
                    "/infographics/IMG-20250918-WA0005.jpg",
                ]}
            />
            <StackedSection
                title="Cauze sociale & de mediu"
                images={["/infographics/IMG-20250918-WA0006.jpg"]}
            />
        </div>
    );
}


