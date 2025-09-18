"use client";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

const slides = [
    "/infographics/IMG-20250918-WA0002.jpg", // infographic 2
    "/infographics/IMG-20250918-WA0005.jpg", // infographic 5
    "/infographics/IMG-20250918-WA0006.jpg", // infographic 6
];

export default function MindsetSection() {
    return (
        <section id="mindset" className="py-24 bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl pb-8 font-extrabold tracking-tight">
                    Mindset
                </h2>

                <div className="relative mt-6 flex justify-center">
                    <div className="w-[90vw] md:w-fit">
                        <Carousel
                            className="w-[90vw] md:w-[calc(80vh*1.2)]"
                            opts={{
                                align: "center",
                                // loop: true,
                            }}
                            orientation="horizontal"
                        >
                            <CarouselContent className="py-4 -ml-2">
                                {slides.map((src) => (
                                    <CarouselItem key={src} className="basis-[83.33%] pl-2">
                                        <div className="flex items-center justify-center">
                                            <div className="w-[75vw] h-[75vw] md:w-[80vh] md:h-[80vh] rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70">
                                                <div className="relative w-full h-full rounded-xl overflow-hidden">
                                                    <Image src={src} alt="Infografic mindset" fill className="object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
