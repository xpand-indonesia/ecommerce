import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva(
    'text-xs leading-none p-1 rounded-full flex items-center justify-center',
    {
        variants: {
            variant: {
                default: '',
                danger: 'bg-red-500 text-white'
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

const Badge = ({
    className,
    variant,
    ...props
}: React.ComponentPropsWithoutRef<'span'> & VariantProps<typeof badgeVariants>) => {

    return (
        <span
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    );
};

export {
    Badge
};