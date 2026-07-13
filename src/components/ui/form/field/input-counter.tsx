'use client';

import { cn, formatNumber, parseNumber } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Input } from "./input";
import { Minus, Plus } from "@/components/icons";

const inputVariants = cva(
    `
        px-14
        text-center
    `,
);

interface InputProps {
    size?: 'md';
    value?: number | undefined;
    onChange?: (value: number | undefined) => void;
    min?: number;
};

type InputCounterProps = Omit<React.ComponentProps<'input'>, 'size' | 'value' | 'onChange'> &
    InputProps &
    VariantProps<typeof inputVariants>;

function InputCounter({
    className,
    type,
    size = 'md',
    value,
    onChange,
    onFocus,
    min = 0,
    ...props
}: InputCounterProps) {
    const reachMin: boolean = value !== undefined && value <= min;
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const numeric = raw ? parseNumber(raw) : undefined;
        onChange?.(numeric);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const target = e.target;

        setTimeout(() => {
            target.select();
        }, 0);

        onFocus?.(e);
    };

    const decrease = () => {
        let newValue;

        if (value !== undefined) {
            newValue = value - 1;
        } else {
            newValue = min;
        }

        if (newValue >= min) {
            onChange?.(newValue);
        }
    };

    const increase = () => {
        let newValue;

        if (value !== undefined) {
            newValue = value + 1;
        } else {
            newValue = 1;
        }

        onChange?.(newValue);
    };

    return (
        <div className="relative">
            <div
                onClick={decrease}
                className={cn(
                    "h-full absolute start-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-4 rounded-full",
                    reachMin ? "text-gray-500" : "cursor-pointer text-gray-800"
                )}
            >
                <Minus className="size-6" />
            </div>
            <Input
                type="text"
                inputMode="numeric"
                className={cn(inputVariants(), className)}
                size={size}
                value={value != undefined ? formatNumber(value) : undefined}
                onChange={onValueChange}
                onFocus={handleFocus}
                {...props}
            />
            <div
                onClick={increase}
                className={cn(
                    "h-full absolute end-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-4 rounded-full",
                    "cursor-pointer text-gray-800"
                )}
            >
                <Plus className="size-6" />
            </div>
        </div>
    );
}

export {
    InputCounter
};