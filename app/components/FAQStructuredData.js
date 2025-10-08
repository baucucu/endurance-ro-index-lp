export default function FAQStructuredData() {
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Ce este Endurance Ro-Index?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Endurance Ro-Index este prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon. Studiul se desfășoară anual și oferă perspective utile pentru organizatori, sponsori și toți actorii implicați în ecosistemul sporturilor de anduranță din România."
                }
            },
            {
                "@type": "Question",
                "name": "Câți participanți au fost studiați în 2025?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Studiul Endurance Ro-Index 2025 a evaluat 1.110 concurenți din 54 de concursuri, reprezentând 242 de branduri relevante și 36 de influenceri din ecosistemul sporturilor de anduranță din România."
                }
            },
            {
                "@type": "Question",
                "name": "Ce sporturi sunt incluse în studiu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Studiul include trei discipline principale: alergare (competiții de șosea și trail), ciclism (curse MTB/trail și de șosea) și triatlon (competiții combinate de înot, ciclism și alergare)."
                }
            },
            {
                "@type": "Question",
                "name": "Cine poate beneficia de acest studiu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Studiul este util pentru organizatorii de concursuri, sponsori ai evenimentelor, branduri și industrii cointeresate, presa de specialitate sport-lifestyle-sănătate, autorități și toți cei care doresc să înțeleagă mai bine fenomenul sporturilor de masă din România."
                }
            },
            {
                "@type": "Question",
                "name": "Cum pot obține raportul complet?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Puteți solicita raportul complet prin completarea formularului de pe site sau contactându-ne direct la 0724.534.232. Organizatorii de concursuri pot deveni parteneri și vor primi gratuit un extras al raportului cu date personalizate pentru evenimentele lor."
                }
            },
            {
                "@type": "Question",
                "name": "Când se desfășoară studiul?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Studiul se desfășoară anual. Ediția din 2025 a evaluat participarea și concurenții la evenimentele din 2024. Următoarea ediție va analiza datele din 2025."
                }
            },
            {
                "@type": "Question",
                "name": "Cine a inițiat acest studiu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Endurance Ro-Index este inițiat de Quantix Marketing Consulting, agenția de cercetare care coordonează studiul, și susținut de SportID, platforma sportivă care sprijină inițiativa."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
    );
}
