import AmbassadorCard from "./AmbassadorCard";

const AMBASSADORS = [
    {
        name: "Alex Corneschi",
        photoSrc: "/ambasadori/Alex Corneschi.png", // placeholder until photo added
        instagramUrl: "https://www.instagram.com/corneschi.alex?igshMWFzeWhtcDN5cnludw==",
        facebookUrl: "https://www.facebook.com/share/1C3YVtPvQE/",
    },
    {
        name: "Adrian Nartea",
        photoSrc: "/ambasadori/Adi Nartea.jpg",
        instagramUrl: "https://www.instagram.com/adinartea?igsh=dWFmMWE0ZnZnemJ3",
        facebookUrl: "https://www.facebook.com/share/15k5ffJDbb/",
    },
    {
        name: "Raluca Kisescu",
        photoSrc: "/ambasadori/Raluca Kisescu.jpg",
        instagramUrl: "https://www.instagram.com/ralucakisescu?igsh=NTl2dnR4bG1xOTVo",
        facebookUrl: "https://www.facebook.com/share/1J6kuqwLZw/",
    },
    {
        name: "Mari Fica",
        photoSrc: "/ambasadori/Mari Fica.jpg",
        instagramUrl: "https://www.instagram.com/fica.mari?igsh=MTNkNjRiczhibzBpMQ==",
        facebookUrl: null,
    },
    {
        name: "Theo Manolache",
        photoSrc: "/ambasadori/Theo Manolache.png", // placeholder until photo added
        instagramUrl: "https://www.instagram.com/theodor.manolache?igsh=dG1zNXNvODdqanV0",
        facebookUrl: "https://www.facebook.com/share/1BDBGSUAFs/",
    },
    {
        name: "Ambasador 6",
        photoSrc: "/ambasadori/Adi Nartea.jpg", // placeholder until photo added
        instagramUrl: null,
        facebookUrl: null,
    },
];

export default function AmbassadorsSection() {
    return (
        <section id="ambasadori" className="py-24">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">Ambasadori</h2>
                <p className="mt-4 text-center text-lg text-slate-600">Oameni care susțin Endurance Ro-Index</p>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {AMBASSADORS.map((a) => (
                        <AmbassadorCard key={a.name} {...a} />
                    ))}
                </div>
            </div>
        </section>
    );
}


