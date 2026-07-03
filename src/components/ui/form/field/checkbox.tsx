'use client';

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
    `
        bg-background border border-gray-300
        flex items-center justify-center
        peer-checked:bg-primary peer-checked:border-primary
        peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100
    `,
    {
        variants: {
            size: {
                md: 'size-4 rounded-sm',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    },
);

function Checkbox({
    className,
    type,
    size,
    ...props
}: React.ComponentProps<'input'> & VariantProps<typeof checkboxVariants>) {
    return (
        <label className="cursor-pointer select-none">
            <input
                data-slot="checkbox"
                type="checkbox"
                className="peer hidden"
                {...props}
            />
            <div className={cn(checkboxVariants({ size }), className)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-white opacity-0 scale-50 transition-all duration-200 ease-in-out pointer-events-none"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </label>
    );
}

export {
    Checkbox
};