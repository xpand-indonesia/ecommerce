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
            success: '',
            warning: '',
            info: '',
            orange: '',
            danger: 'bg-red-500 text-white',
        },
        appearance: {
            default: '',
            light: '',
        },
    },
    compoundVariants: [
        {
            variant: 'success',
            appearance: 'light',
            class: 'bg-[#BEFFD0] text-[#018F28]',
        },
        {
            variant: 'warning',
            appearance: 'light',
            class: 'bg-[#FFEECC] text-[#996502]',
        },
        {
            variant: 'info',
            appearance: 'light',
            class: 'bg-[#EFDFFF] text-[#7909FF]',
        },
        {
            variant: 'orange',
            appearance: 'light',
            class: 'bg-[#FFDEC5] text-[#B93C08]',
        },
        {
            variant: 'danger',
            appearance: 'light',
            class: 'bg-[#F9D9E1] text-[#C43B5E]',
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
