"use client";
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
    const breadcrumbItems = [
        { name: 'Acasă', href: '/', current: false },
        ...items
    ];

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                {breadcrumbItems.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
                        )}
                        {item.current ? (
                            <span className="text-[#0f3e5e] font-medium" aria-current="page">
                                {item.name}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-gray-500 hover:text-[#0f3e5e] transition-colors duration-200"
                            >
                                {index === 0 ? (
                                    <span className="flex items-center">
                                        <Home className="w-4 h-4 mr-1" aria-hidden="true" />
                                        {item.name}
                                    </span>
                                ) : (
                                    item.name
                                )}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
