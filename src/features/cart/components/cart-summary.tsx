import { Separator } from '@/components/ui/separator';
import { formatNumber } from '@/lib/utils';

export function CartSummary() {
    return (
        <div className="py-4 flex flex-col gap-4 border-b border-gray-200">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-gray-800">
                    <div className="text-xl font-heading">Subtotal</div>
                    <div>{formatNumber(120000, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                    <div>Tax (10%)</div>
                    <div>{formatNumber(12000, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                    <div>Service Charge (2%)</div>
                    <div>{formatNumber(1500, { currency: 'IDR' })}</div>
                </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-gray-800">
                <div className="text-xl font-heading">Grand Total</div>
                <div>{formatNumber(133000, { currency: 'IDR' })}</div>
            </div>
        </div>
    );
}
