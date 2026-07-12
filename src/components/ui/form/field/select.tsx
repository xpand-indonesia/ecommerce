'use client';

import * as React from 'react';
import { isValidElement, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Select as SelectPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

// Create a Context for `indicatorPosition` and `indicator` control
const SelectContext = React.createContext<{
    indicatorPosition: 'left' | 'right';
    indicatorVisibility: boolean;
    indicator: ReactNode;
}>({ indicatorPosition: 'left', indicator: null, indicatorVisibility: true });

// Root Component
const Select = ({
    indicatorPosition = 'right',
    indicatorVisibility = true,
    indicator,
    ...props
}: {
    indicatorPosition?: 'left' | 'right';
    indicatorVisibility?: boolean;
    indicator?: ReactNode;
} & React.ComponentProps<typeof SelectPrimitive.Root>) => {
    return (
        <SelectContext.Provider
            value={{ indicatorPosition, indicatorVisibility, indicator }}
        >
            <SelectPrimitive.Root {...props} />
        </SelectContext.Provider>
    );
};

function SelectGroup({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

// Define size variants for SelectTrigger
const selectTriggerVariants = cva(
    `
    flex bg-background w-full items-center justify-between outline-none border border-input 
    text-primary data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] 
    focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
    [[data-invalid=true]_&]:border-destructive/60 [[data-invalid=true]_&]:ring-destructive/10  dark:[[data-invalid=true]_&]:border-destructive dark:[[data-invalid=true]_&]:ring-destructive/20
  `,
    {
        variants: {
            size: {
                sm: 'h-7 px-2.5 text-xs gap-1 rounded-full',
                md: 'h-8.5 px-4 text-base leading-(--text-sm--line-height) gap-1 rounded-full',
                lg: 'h-10 px-4 text-sm gap-1.5 rounded-full',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    },
);

export interface SelectTriggerProps
    extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> { }

function SelectTrigger({
    className,
    children,
    size,
    ...props
}: SelectTriggerProps) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            className={cn(selectTriggerVariants({ size }), className)}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#003813" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
    className,
    children,
    position = 'popper',
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                className={cn(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover shadow-md shadow-black/5 text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    position === 'popper' &&
                    'data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1.5 data-[side=right]:translate-x-1.5 data-[side=top]:-translate-y-1.5',
                    className,
                )}
                position={position}
                {...props}
            >
                <SelectPrimitive.Viewport
                    className={cn(
                        'p-1.5',
                        position === 'popper' &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn(
                'py-1.5 ps-8 pe-2 text-xs text-muted-foreground font-medium',
                className,
            )}
            {...props}
        />
    );
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    const { indicatorPosition, indicatorVisibility, indicator } =
        React.useContext(SelectContext);

    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-hidden text-foreground hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50',
                indicatorPosition === 'left' ? 'ps-8 pe-2' : 'pe-8 ps-2',
                className,
            )}
            {...props}
        >
            {indicatorVisibility &&
                (indicator && isValidElement(indicator) ? (
                    indicator
                ) : (
                    <span
                        className={cn(
                            'absolute flex h-3.5 w-3.5 items-center justify-center',
                            indicatorPosition === 'left' ? 'start-2' : 'end-2',
                        )}
                    >
                        <SelectPrimitive.ItemIndicator>
                            {/* <Check className="h-4 w-4 text-primary" /> */}
                            v
                        </SelectPrimitive.ItemIndicator>
                    </span>
                ))}
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}

function SelectIndicator({
    children,
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemIndicator>) {
    const { indicatorPosition } = React.useContext(SelectContext);

    return (
        <span
            data-slot="select-indicator"
            className={cn(
                'absolute flex top-1/2 -translate-y-1/2 items-center justify-center',
                indicatorPosition === 'left' ? 'start-2' : 'end-2',
                className,
            )}
            {...props}
        >
            <SelectPrimitive.ItemIndicator>{children}</SelectPrimitive.ItemIndicator>
        </span>
    );
}

function SelectSeparator({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn('-mx-1.5 my-1.5 h-px bg-border', className)}
            {...props}
        />
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectIndicator,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};
