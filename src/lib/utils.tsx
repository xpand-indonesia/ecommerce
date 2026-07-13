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

interface ParseNumberOptions {
    locale?: string;
}

export function parseNumber(
    formattedString: string,
    options: ParseNumberOptions = {}
): number {
    const { locale = 'id-ID' } = options;

    const formatter = new Intl.NumberFormat(locale);
    const parts = formatter.formatToParts(1.1);
    const decimalSeparator = parts.find(part => part.type === 'decimal')?.value || '.';

    const regex = new RegExp(`[^0-9\\-${decimalSeparator}]`, 'g');
    let cleanString = formattedString.replace(regex, '');

    if (decimalSeparator !== '.') {
        cleanString = cleanString.replace(decimalSeparator, '.');
    }

    const result = parseFloat(cleanString);

    return isNaN(result) ? 0 : result;
}