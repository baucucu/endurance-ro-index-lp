"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
    const [openItems, setOpenItems] = useState(new Set());

    const faqs = [
        {
            id: "ce-este-endurance-ro-index",
            question: "Ce este Endurance Ro-Index?",
            answer: "Endurance Ro-Index este prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon. Studiul se desfășoară anual și oferă perspective utile pentru organizatori, sponsori și toți actorii implicați în ecosistemul sporturilor de anduranță din România."
        },
        {
            id: "cati-participanti-studiati",
            question: "Câți participanți au fost studiați în 2025?",
            answer: "Studiul Endurance Ro-Index 2025 a evaluat 1.110 concurenți din 54 de concursuri, reprezentând 242 de branduri relevante și 36 de influenceri din ecosistemul sporturilor de anduranță din România."
        },
        {
            id: "ce-sporturi-incluse",
            question: "Ce sporturi sunt incluse în studiu?",
            answer: "Studiul include trei discipline principale: alergare (competiții de șosea și trail), ciclism (curse MTB/trail și de șosea) și triatlon (competiții combinate de înot, ciclism și alergare)."
        },
        {
            id: "cine-poate-beneficia",
            question: "Cine poate beneficia de acest studiu?",
            answer: "Studiul este util pentru organizatorii de concursuri, sponsori ai evenimentelor, branduri și industrii cointeresate, presa de specialitate sport-lifestyle-sănătate, autorități și toți cei care doresc să înțeleagă mai bine fenomenul sporturilor de masă din România."
        },
        {
            id: "cum-pot-obtine-raportul",
            question: "Cum pot obține raportul complet?",
            answer: "Puteți solicita raportul complet prin completarea formularului de pe site sau contactându-ne direct la 0724.534.232. Organizatorii de concursuri pot deveni parteneri și vor primi gratuit un extras al raportului cu date personalizate pentru evenimentele lor."
        },
        {
            id: "cand-se-desfasoara-studiu",
            question: "Când se desfășoară studiul?",
            answer: "Studiul se desfășoară anual. Ediția din 2025 a evaluat participarea și concurenții la evenimentele din 2024. Următoarea ediție va analiza datele din 2025."
        },
        {
            id: "cine-initiat-studiu",
            question: "Cine a inițiat acest studiu?",
            answer: "Endurance Ro-Index este inițiat de Quantix Marketing Consulting, agenția de cercetare care coordonează studiul, și susținut de SportID, platforma sportivă care sprijină inițiativa."
        }
    ];

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-sky-50 to-white">
            <div className="mx-auto max-w-4xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f3e5e] mb-4">
                    Întrebări Frecvente
                </h2>
                <p className="text-center text-lg text-[#0f3e5e] mb-12">
                    Răspunsuri la cele mai comune întrebări despre Endurance Ro-Index
                </p>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                                aria-expanded={openItems.has(faq.id)}
                            >
                                <h3 className="text-lg font-semibold text-[#0f3e5e] pr-4">
                                    {faq.question}
                                </h3>
                                {openItems.has(faq.id) ? (
                                    <ChevronUp className="w-5 h-5 text-[#0f3e5e] flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#0f3e5e] flex-shrink-0" />
                                )}
                            </button>
                            {openItems.has(faq.id) && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
