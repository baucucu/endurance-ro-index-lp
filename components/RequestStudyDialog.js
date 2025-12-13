"use client";
import { X } from "lucide-react";

export default function RequestStudyDialog({ isOpen, onClose, iframeSrc = "https://n8n.appy.agency/form/endurance-ro-index" }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div role="dialog" aria-modal="true" className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-center justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                        aria-label="Închide"
                    >
                        <X className="size-5" />
                    </button>
                </div>
                <div className="mt-4">
                    <iframe
                        src={iframeSrc}
                        title="Formular solicitare studiu"
                        loading="lazy"
                        className="h-[560px] w-full rounded-lg border border-slate-200"
                    />
                </div>
            </div>
        </div>
    );
}


