'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(
    'text-sm leading-none text-gray-700',
    {
        variants: {
            variant: {
                default: 'font-medium',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function Label({
    className,
    variant,
    ...props
}: React.ComponentPropsWithoutRef<'label'> &
    VariantProps<typeof labelVariants>) {
    return (
        <label
            data-slot="label"
            className={cn(labelVariants({ variant }), className)}
            {...props}
        />
    );
}

export { Label };
