'use client';

import { useLayout } from '@/components/layout/context/layout-context';
import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';

interface headerWrapperProps {
    children: ReactNode;
}

export function HeaderWrapper({ children }: headerWrapperProps) {
    const { headerStyle } = useLayout();
    const [isScrolled, setIsScrolled] = useState(false);
    const transparent = isScrolled ? false : headerStyle === 'transparent';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'group fixed top-0 left-0 right-0 z-50 border-b transition-colors',
                transparent
                    ? 'transparent border-white/20'
                    : 'default bg-white border-gray-200'
            )}
        >
            {children}
        </header>
    );
}
