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
    "/infographics/IMG-20250918-WA0001.jpg",
    "/infographics/IMG-20250918-WA0002.jpg",
    "/infographics/IMG-20250918-WA0003.jpg",
    "/infographics/IMG-20250918-WA0004.jpg",
    "/infographics/IMG-20250918-WA0005.jpg",
    "/infographics/IMG-20250918-WA0006.jpg",
];

export default function InfographicsCarousel() {
    return (
        <section id="infografice" className="py-24 bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl pb-8 font-extrabold tracking-tight">
                    Infografice
                </h2>
                {/* <p className="mt-4 text-center text-lg text-slate-600">
                    Rezumate vizuale ale rezultatelor studiului
                </p> */}

                <div className="relative mt-12">
                    <Carousel
                        className="w-full h-[840px] sm:h-[960px]"
                        opts={{
                            align: "start",
                            // loop: true,
                        }}
                        orientation="horizontal"
                    >
                        <CarouselContent className="px-4">
                            {slides.map((src) => (
                                <CarouselItem key={src} className="basis-[90%]">
                                    <div className="h-full flex items-center">
                                        <div className="w-full rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70">
                                            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                                                <Image src={src} alt="Infografic" fill className="object-contain" />
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
        </section>
    );
}


