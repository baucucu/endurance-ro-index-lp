export default function sitemap() {
    const baseUrl = 'https://endurance-index.ro';
    const currentDate = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];
}
