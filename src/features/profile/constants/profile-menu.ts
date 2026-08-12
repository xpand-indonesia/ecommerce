interface Menu {
    icon: string;
    title: string;
    href: string;
}

export const MENUS: Menu[] = [
    { href: '/profile', icon: '', title: 'My Profile' },
    { href: '/profile/shipping-address', icon: '', title: 'Shipping Address' },
    { href: '/profile/account', icon: '', title: 'Account Information' },
    { href: '/sign-out', icon: '', title: 'Logout' },
];
