'use client';

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    `
        flex w-full bg-background border border-input rounded-full text-dark placeholder:text-gray-500
        outline-none transition-colors
        focus-visible:border-primary
    `,
    {
        variants: {
            size: {
                md: 'h-[51px] px-4 text-base',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    },
);

function Input({
    className,
    type,
    size,
    ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
    return (
        <input
            data-slot="input"
            type={type}
            className={cn(inputVariants({ size }), className)}
            {...props}
        />
    );
}

export {
    Input
};