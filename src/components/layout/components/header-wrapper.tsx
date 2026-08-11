'use client';

import { ReactNode } from 'react';
import { useLayout } from '@/components/layout/context/layout-context';
import { cn } from '@/lib/utils';

interface headerWrapperProps {
    children: ReactNode;
}

export function HeaderWrapper({ children }: headerWrapperProps) {
    const { headerStyle } = useLayout();
    const transparent = headerStyle === 'transparent';

    return (
        <header
            className={cn(
                'group absolute top-0 left-0 right-0 z-50 border-b',
                transparent
                    ? 'transparent border-white/20'
                    : 'default bg-white border-gray-200'
            )}
        >
            {children}
        </header>
    );
}
