import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const badgeVariants = cva('rounded-full flex items-center justify-center', {
    variants: {
        size: {
            xs: 'text-xs/none p-1',
            sm: 'text-sm/none py-1 px-2',
        },
        variant: {
            default: '',
            warning: '',
            danger: 'bg-red-500 text-white',
        },
        appearance: {
            default: '',
            light: '',
        },
    },
    compoundVariants: [
        {
            variant: 'warning',
            appearance: 'light',
            class: 'bg-[#FFEECC] text-[#996502]',
        },
    ],
    defaultVariants: {
        size: 'xs',
        variant: 'default',
        appearance: 'default',
    },
});

const Badge = ({
    className,
    size,
    variant,
    appearance,
    ...props
}: React.ComponentPropsWithoutRef<'span'> &
    VariantProps<typeof badgeVariants>) => {
    return (
        <span
            data-slot="badge"
            className={cn(
                badgeVariants({ size, variant, appearance }),
                className
            )}
            {...props}
        />
    );
};

export { Badge };
