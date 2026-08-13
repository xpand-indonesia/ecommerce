'use client';

import { cn } from '@/lib/utils';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import * as React from 'react';

interface SeparatorProps extends React.ComponentProps<
    typeof SeparatorPrimitive.Root
> {
    dashed?: boolean;
    dashArray?: string;
}

function Separator({
    className,
    orientation = 'horizontal',
    decorative = true,
    dashed,
    dashArray = '5,5',
    ...props
}: SeparatorProps) {
    const isHorizontal = orientation === 'horizontal';

    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
                'relative shrink-0 overflow-hidden',
                dashed ? 'bg-transparent' : 'bg-gray-200',
                orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
                className
            )}
            {...props}
        >
            {dashed && (
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 block overflow-visible"
                >
                    <line
                        x1="0"
                        y1="0"
                        x2={isHorizontal ? '100%' : '0'}
                        y2={isHorizontal ? '0' : '100%'}
                        strokeWidth={1.5}
                        strokeDasharray={dashArray}
                        className={'stroke-current'}
                    />
                </svg>
            )}
        </SeparatorPrimitive.Root>
    );
}

export { Separator };
