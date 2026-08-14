'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/form/field/select';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENUS } from '../constants/profile-menu';

export function ProfileMenuSelect() {
    const pathname = usePathname();

    return (
        <Select value={pathname}>
            <SelectTrigger className="h-13 bg-transparent border-gray-200 text-gray-800">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {MENUS.map((menu, idx) => (
                    <SelectItem
                        value={menu.href}
                        key={`profile-menu-select-${idx}`}
                        className="py-0 [&>span]:flex-1 [&>span]:h-full"
                    >
                        <Link
                            href={menu.href}
                            className="py-1.5 h-full flex items-center gap-1"
                        >
                            {menu.icon}
                            {menu.title}
                        </Link>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
