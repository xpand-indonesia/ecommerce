import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

interface FormatNumberOptions {
    locale?: string;
    currency?: string;
    decimalPlaces?: number;
}

export function formatNumber(
    amount: number,
    options: FormatNumberOptions = {}
): string {
    const { locale = 'id-ID', currency, decimalPlaces = 0 } = options;

    return new Intl.NumberFormat(locale, {
        style: !!currency ? 'currency' : 'decimal',
        currency: currency,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
    }).format(amount);
}