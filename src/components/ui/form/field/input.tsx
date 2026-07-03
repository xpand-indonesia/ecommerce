import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    `
        flex w-full bg-background border border-input rounded-full transition-colors text-dark outline-none
        focus-visible:border-primary
    `,
    {
        variants: {
            variant: {
                md: 'h-[51px] px-4 text-base',
            },
        },
        defaultVariants: {
            variant: 'md',
        },
    },
);

function Input({
    className,
    type,
    variant,
    ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
    return (
        <input
            data-slot="input"
            type={type}
            className={cn(inputVariants({ variant }), className)}
            {...props}
        />
    );
}

export {
    Input
};