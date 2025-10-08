export default function imagesSitemap() {
    const baseUrl = 'https://endurance-index.ro';
    const currentDate = new Date().toISOString();

    const images = [
        {
            loc: `${baseUrl}/#sporturi`,
            image: {
                loc: 'https://plus.unsplash.com/premium_photo-1664304823165-888f56fc101b?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Alergare pe șosea - Sporturi studiate în Endurance Ro-Index',
                caption: 'Sportivi alergând pe șosea în cadrul unei competiții de anduranță din România - Endurance Ro-Index studiu 2025'
            }
        },
        {
            loc: `${baseUrl}/#sporturi`,
            image: {
                loc: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1974&auto=format&fit=crop',
                title: 'Ciclism - Sporturi studiate în Endurance Ro-Index',
                caption: 'Cicliști participând la o competiție de ciclism în România - studiu Endurance Ro-Index 2025'
            }
        },
        {
            loc: `${baseUrl}/#sporturi`,
            image: {
                loc: 'https://plus.unsplash.com/premium_photo-1661964408302-d88b6e98322a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Triatlon - Sporturi studiate în Endurance Ro-Index',
                caption: 'Triatleți în tranziția de la înot la ciclism în cadrul unei competiții de triatlon din România - Endurance Ro-Index'
            }
        }
    ];

    return images.map(image => ({
        url: image.loc,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
        images: [image.image]
    }));
}
