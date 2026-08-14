import { Card } from '@/components/icons/card';
import { Location } from '@/components/icons/location';
import { Logout } from '@/components/icons/logout';
import { Profile } from '@/components/icons/profile';
import { ReactNode } from 'react';

interface Menu {
    icon: ReactNode;
    title: string;
    href: string;
}

export const MENUS: Menu[] = [
    {
        href: '/profile',
        icon: <Profile className="size-5 lg:size-6" />,
        title: 'My Profile',
    },
    {
        href: '/profile/shipping-address',
        icon: <Location className="size-5 lg:size-6" />,
        title: 'Shipping Address',
    },
    {
        href: '/profile/account',
        icon: <Card className="size-5 lg:size-6" />,
        title: 'Account Information',
    },
    {
        href: '/sign-out',
        icon: <Logout className="size-5 lg:size-6" />,
        title: 'Logout',
    },
];
