import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const metadata = {
    title: 'Pagina nu a fost găsită | 404',
    description: 'Pagina pe care o căutați nu există. Explorați Endurance Ro-Index pentru studii de cercetare despre sporturile de anduranță din România.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-extrabold text-[#0f3e5e] mb-4">404</h1>
                    <h2 className="text-3xl font-bold text-[#0f3e5e] mb-4">
                        Pagina nu a fost găsită
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-[#0f3e5e] mb-4">
                        Poate vă interesează:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <Link
                            href="/#despre"
                            className="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <h4 className="font-semibold text-[#0f3e5e] mb-2">Despre Studiu</h4>
                            <p className="text-sm text-gray-600">Aflați mai multe despre Endurance Ro-Index 2025</p>
                        </Link>
                        <Link
                            href="/#sporturi"
                            className="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <h4 className="font-semibold text-[#0f3e5e] mb-2">Sporturi Studiate</h4>
                            <p className="text-sm text-gray-600">Alergare, ciclism și triatlon</p>
                        </Link>
                        <Link
                            href="/#profil"
                            className="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <h4 className="font-semibold text-[#0f3e5e] mb-2">Profilul Participanților</h4>
                            <p className="text-sm text-gray-600">Statistici despre concurenți</p>
                        </Link>
                        <Link
                            href="/#ambasadori"
                            className="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <h4 className="font-semibold text-[#0f3e5e] mb-2">Ambasadori</h4>
                            <p className="text-sm text-gray-600">Oameni care susțin studiul</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f3e5e] text-white rounded-lg hover:bg-[#0f3e5e]/90 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Înapoi la Pagina Principală
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#0f3e5e] text-[#0f3e5e] rounded-lg hover:bg-[#0f3e5e]/5 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Pagina Anterioară
                    </button>
                </div>

                <div className="mt-12 p-6 bg-[#0f3e5e]/5 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#0f3e5e] mb-2">
                        Căutați ceva specific?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Contactați-ne pentru a găsi informațiile de care aveți nevoie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <a
                            href="tel:0724534232"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0f3e5e] rounded-lg hover:bg-gray-50 transition-colors border border-[#0f3e5e]/20"
                        >
                            <Search className="w-4 h-4" />
                            0724.534.232
                        </a>
                        <a
                            href="mailto:contact@endurance-index.ro"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0f3e5e] rounded-lg hover:bg-gray-50 transition-colors border border-[#0f3e5e]/20"
                        >
                            <Search className="w-4 h-4" />
                            contact@endurance-index.ro
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
