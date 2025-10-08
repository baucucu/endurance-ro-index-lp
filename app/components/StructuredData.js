export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://endurance-index.ro/#website",
                "url": "https://endurance-index.ro/",
                "name": "Endurance Ro-Index",
                "description": "Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon.",
                "publisher": {
                    "@id": "https://endurance-index.ro/#organization"
                },
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://endurance-index.ro/?s={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                ],
                "inLanguage": "ro-RO"
            },
            {
                "@type": "Organization",
                "@id": "https://endurance-index.ro/#organization",
                "name": "Endurance Ro-Index",
                "url": "https://endurance-index.ro/",
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "ro-RO",
                    "@id": "https://endurance-index.ro/#/schema/logo/image/",
                    "url": "https://endurance-index.ro/android-chrome-512x512.png",
                    "contentUrl": "https://endurance-index.ro/android-chrome-512x512.png",
                    "width": 512,
                    "height": 512,
                    "caption": "Endurance Ro-Index"
                },
                "image": {
                    "@id": "https://endurance-index.ro/#/schema/logo/image/"
                },
                "sameAs": [
                    "https://quantix.ro"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+40-724-534-232",
                    "contactType": "customer service",
                    "areaServed": "RO",
                    "availableLanguage": "Romanian"
                }
            },
            {
                "@type": "ResearchProject",
                "@id": "https://endurance-index.ro/#researchproject",
                "name": "Endurance Ro-Index 2025",
                "description": "Studiu de cercetare despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon din România",
                "url": "https://endurance-index.ro/",
                "mainEntityOfPage": {
                    "@id": "https://endurance-index.ro/#webpage"
                },
                "publisher": {
                    "@id": "https://endurance-index.ro/#organization"
                },
                "funder": [
                    {
                        "@type": "Organization",
                        "name": "Quantix Marketing Consulting"
                    },
                    {
                        "@type": "Organization",
                        "name": "SportID"
                    }
                ],
                "keywords": [
                    "endurance sports",
                    "alergare",
                    "ciclism",
                    "triatlon",
                    "concursuri de masă",
                    "studiu de cercetare",
                    "sporturi de anduranță",
                    "România"
                ],
                "about": [
                    {
                        "@type": "Thing",
                        "name": "Alergare",
                        "description": "Competiții de șosea și trail"
                    },
                    {
                        "@type": "Thing",
                        "name": "Ciclism",
                        "description": "Curse MTB/trail și de șosea"
                    },
                    {
                        "@type": "Thing",
                        "name": "Triatlon",
                        "description": "Competiții combinate de înot, ciclism și alergare"
                    }
                ],
                "temporalCoverage": "2024",
                "spatialCoverage": {
                    "@type": "Country",
                    "name": "România"
                },
                "inLanguage": "ro-RO"
            },
            {
                "@type": "WebPage",
                "@id": "https://endurance-index.ro/#webpage",
                "url": "https://endurance-index.ro/",
                "name": "Endurance Ro-Index 2025 | Studiu de cercetare despre sporturile de anduranță din România",
                "isPartOf": {
                    "@id": "https://endurance-index.ro/#website"
                },
                "about": {
                    "@id": "https://endurance-index.ro/#researchproject"
                },
                "description": "Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon. Studiu de cercetare 2025 cu 1.110 concurenți, 54 concursuri și 242 branduri relevante.",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Acasă",
                            "item": "https://endurance-index.ro/"
                        }
                    ]
                },
                "inLanguage": "ro-RO"
            },
            {
                "@type": "Dataset",
                "@id": "https://endurance-index.ro/#dataset",
                "name": "Endurance Ro-Index 2025 Dataset",
                "description": "Date despre participarea la concursuri de masă din România în 2024",
                "url": "https://endurance-index.ro/",
                "publisher": {
                    "@id": "https://endurance-index.ro/#organization"
                },
                "keywords": [
                    "sporturi de anduranță",
                    "concursuri de masă",
                    "alergare",
                    "ciclism",
                    "triatlon",
                    "participanți",
                    "statistici sportive"
                ],
                "temporalCoverage": "2024",
                "spatialCoverage": {
                    "@type": "Country",
                    "name": "România"
                },
                "distribution": [
                    {
                        "@type": "DataDownload",
                        "name": "Raport Endurance Ro-Index 2025",
                        "description": "Raport complet cu rezultatele studiului de cercetare",
                        "encodingFormat": "application/pdf",
                        "contentUrl": "https://endurance-index.ro/raport-2025"
                    }
                ],
                "inLanguage": "ro-RO"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
