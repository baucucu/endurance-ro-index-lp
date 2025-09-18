import { GraduationCap, UsersRound, Heart, Target, Zap, TrendingUp, Stethoscope, Dumbbell } from "lucide-react";

const Card = ({ icon: Icon, value, label, colorClasses }) => (
    <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div className={`mx-auto flex size-14 items-center justify-center rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
            <Icon className="size-7" aria-hidden />
        </div>
        <p className="mt-6 text-center text-3xl font-extrabold">{value}</p>
        <p className="mt-2 text-center text-slate-600">{label}</p>
    </div>
);

export default function ParticipantsProfile() {
    return (
        <section id="profil" className="py-24">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Profilul Participanților
                </h2>
                <p className="mt-4 text-center text-lg text-slate-600">
                    Caracteristicile principale ale participanților la concursuri de alergare, ciclism și triatlon în România
                </p>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Card icon={GraduationCap} value="85%" label="au studii universitare" colorClasses={{ bg: "bg-blue-50", text: "text-blue-600" }} />
                    <Card icon={UsersRound} value="77%" label="concurează alături de prieteni, familie sau apropiați" colorClasses={{ bg: "bg-rose-50", text: "text-rose-500" }} />
                    <Card icon={Heart} value="69%" label="apreciază competițiile care susțin cauze sociale" colorClasses={{ bg: "bg-yellow-50", text: "text-yellow-600" }} />
                    <Card icon={Target} value="65%" label="și-au stabilit obiective personale legate de sport/mișcare" colorClasses={{ bg: "bg-green-50", text: "text-green-600" }} />
                    <Card icon={Zap} value="82%" label="au utilizat suplimente pentru sportivi în 2024" colorClasses={{ bg: "bg-violet-50", text: "text-violet-600" }} />
                    <Card icon={TrendingUp} value="75%" label="se informează despre concursuri pe Facebook" colorClasses={{ bg: "bg-sky-50", text: "text-sky-600" }} />
                    <Card icon={Stethoscope} value="72%" label="și-au făcut controale medicale de monitorizare" colorClasses={{ bg: "bg-rose-50", text: "text-rose-600" }} />
                    <Card icon={Dumbbell} value="69%" label="au abonamente la sală" colorClasses={{ bg: "bg-orange-50", text: "text-orange-600" }} />
                </div>
            </div>
        </section>
    );
}


