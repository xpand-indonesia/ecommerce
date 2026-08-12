'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ProfileMenuItemProps {
    icon: ReactNode;
    href: string;
    title: string;
}

export function ProfileMenuItem({ icon, href, title }: ProfileMenuItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-800'
            }`}
        >
            {icon}
            {title}
        </Link>
    );
}
