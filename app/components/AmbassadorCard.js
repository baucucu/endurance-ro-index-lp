import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export default function AmbassadorCard({ name, photoSrc, instagramUrl, facebookUrl }) {
    return (
        <article className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
                <Image
                    src={photoSrc}
                    alt={`${name} - Ambasador Endurance Ro-Index 2025`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover"
                    title={`${name} - Ambasador Endurance Ro-Index`}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold" title={name}>{name}</h3>
                <div className="mt-2 flex items-center gap-2">
                    {instagramUrl && (
                        <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100">
                            <Instagram className="size-5" aria-hidden />
                            <span className="sr-only">Instagram</span>
                        </a>
                    )}
                    {facebookUrl && (
                        <a href={facebookUrl} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
                            <Facebook className="size-5" aria-hidden />
                            <span className="sr-only">Facebook</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}


