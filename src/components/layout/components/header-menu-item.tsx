import { cn } from '@/lib/utils';
import Link from 'next/link';

export function HeaderMenuItem({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className={cn(
                'font-heading text-base transition-colors',
                'group-[.transparent]:text-white group-[.transparent]:hover:text-white/80',
                'group-[.default]:hover:primary'
            )}
        >
            {label}
        </Link>
    );
}
