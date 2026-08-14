import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContentTitleProp {
    className?: string;
    children?: ReactNode;
}

export function ContentTitle({ className, children }: ContentTitleProp) {
    return (
        <div
            className={cn(
                'font-heading text-2xl :text-4xl font-bold text-gray-800',
                className
            )}
        >
            {children}
        </div>
    );
}
