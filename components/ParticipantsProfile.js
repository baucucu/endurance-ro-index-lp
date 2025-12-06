"use client";
import { GraduationCap, UsersRound, Heart, Target, Zap, TrendingUp, Stethoscope, Dumbbell, Baby, MapPin, Mountain, BadgeDollarSign, HandCoins, HeartPulse, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Card = ({ icon: Icon, value, label, colorClasses }) => (
    <div className="rounded-lg bg-white p-3 sm:p-4 shadow-md ring-1 ring-slate-200">
        <div className="grid grid-cols-3 items-center gap-3">
            <div className="col-span-1 flex flex-col items-center justify-center gap-1">
                <div className={`flex size-8 items-center justify-center rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                    <Icon className="size-4" aria-hidden />
                </div>
                <p className="text-lg sm:text-xl font-extrabold">{value}</p>
            </div>
            <p className="col-span-2 text-left text-xs sm:text-sm leading-snug text-slate-600">{label}</p>
        </div>
    </div>
);

export default function ParticipantsProfile() {
    return (
        <section id="profil" className="py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Profilul Participanților
                </h2>
                <p className="mt-4 text-center text-lg text-slate-600">
                    la concursuri de alergare, ciclism și triatlon din România sau străinătate
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                    <Card icon={GraduationCap} value="85%" label="au studii universitare" colorClasses={{ bg: "bg-blue-50", text: "text-blue-600" }} />
                    <Card icon={UsersRound} value="77%" label="concurează alături de prieteni, familie sau apropiați" colorClasses={{ bg: "bg-rose-50", text: "text-rose-500" }} />
                    <Card icon={Heart} value="69%" label="apreciază competițiile care susțin cauze sociale" colorClasses={{ bg: "bg-yellow-50", text: "text-yellow-600" }} />
                    <Card icon={Target} value="65%" label="și-au stabilit obiective personale legate de sport/mișcare" colorClasses={{ bg: "bg-green-50", text: "text-green-600" }} />
                    <Card icon={Zap} value="82%" label="au utilizat suplimente pentru sportivi în 2024" colorClasses={{ bg: "bg-violet-50", text: "text-violet-600" }} />
                    <Card icon={TrendingUp} value="75%" label="se informează despre concursuri pe Facebook" colorClasses={{ bg: "bg-sky-50", text: "text-sky-600" }} />
                    <Card icon={Stethoscope} value="31%" label="și-au făcut controale medicale de monitorizare" colorClasses={{ bg: "bg-rose-50", text: "text-rose-600" }} />
                    <Card icon={Dumbbell} value="34%" label="au abonamente la sală" colorClasses={{ bg: "bg-orange-50", text: "text-orange-600" }} />
                    <Card icon={Baby} value="17%" label="au participat alături de copii" colorClasses={{ bg: "bg-amber-50", text: "text-amber-600" }} />
                    <Card icon={MapPin} value="72%" label="s-au deplasat cel puțin o dată în alt județ, pentru concurs" colorClasses={{ bg: "bg-cyan-50", text: "text-cyan-600" }} />
                    <Card icon={Mountain} value="69%" label="apreciază ca foarte importantă frumusețea traseelor" colorClasses={{ bg: "bg-emerald-50", text: "text-emerald-600" }} />
                    <Card icon={BadgeDollarSign} value="60%" label="apreciază ca foarte importantă susținerea sponsorilor" colorClasses={{ bg: "bg-indigo-50", text: "text-indigo-600" }} />
                    <Card icon={HandCoins} value="23%" label="au donat suplimentar pentru o cauză, față de taxa de participare" colorClasses={{ bg: "bg-lime-50", text: "text-lime-600" }} />
                    <Card icon={HeartPulse} value="46%" label="sunt motivați de impactul pozitiv asupra sănătății" colorClasses={{ bg: "bg-red-50", text: "text-red-600" }} />
                    <Card icon={Users} value="58%" label="apreciază ca foarte importantă prezența voluntarilor pe traseu" colorClasses={{ bg: "bg-teal-50", text: "text-teal-600" }} />
                    <Card icon={Sparkles} value="64%" label="sunt motivați să participe de stilul de viață pe care l-au adoptat" colorClasses={{ bg: "bg-fuchsia-50", text: "text-fuchsia-600" }} />
                </div>

                {/* Profiles infographics carousel */}
                <div className="mt-16 flex justify-center">
                    <div className="w-[90vw] md:w-[calc(80vh*1.2)]">
                        <Carousel className="w-full" opts={{ align: "center" }}>
                            <CarouselContent className="py-4 -ml-2">
                                {["/profiles/1.jpg", "/profiles/2.jpg"].map((src) => (
                                    <CarouselItem key={src} className="basis-[83.33%] pl-2">
                                        <div className="grid place-items-center">
                                            <div className="inline-flex max-w-[90vw] md:max-w-[80vh] max-h-[80vh] rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/70 overflow-hidden">
                                                <Image src={src} alt="Profil infografic" width={1600} height={2000} className="h-auto w-auto max-w-full max-h-[76vh] object-contain rounded-xl" />
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


