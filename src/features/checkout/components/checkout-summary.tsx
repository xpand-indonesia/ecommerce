import { Separator } from '@/components/ui/separator';
import { formatNumber } from '@/lib/utils';

export function CheckoutSummary() {
    return (
        <div className="py-4 flex flex-col gap-4 border-b border-gray-200">
            <div className="flex items-center justify-between text-base lg:text-xl font-heading">
                <div>Product</div>
                <div>Sub Total</div>
            </div>
            <Separator className="text-gray-300" dashed />
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between text-sm text-gray-800 lg:text-base lg:text-primary">
                    <div className="flex flex-col gap-1">
                        <div>x2 - Funki Mushroom Coffee</div>
                        <div className="text-xs text-gray-500">
                            27oz - Red Bean
                        </div>
                    </div>
                    <div>{formatNumber(120000, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-sm lg:text-base text-gray-500">
                    <div>Tax (10%)</div>
                    <div>{formatNumber(12000, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-sm lg:text-base text-gray-500">
                    <div>Service Charge (2%)</div>
                    <div>{formatNumber(1500, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-sm lg:text-base text-gray-500">
                    <div>Shipping Charge</div>
                    <div>{formatNumber(23500, { currency: 'IDR' })}</div>
                </div>
                <div className="flex items-center justify-between text-sm lg:text-base text-gray-500">
                    <div>Discount</div>
                    <div className="text-success">
                        {formatNumber(-10000, { currency: 'IDR' })}
                    </div>
                </div>
            </div>
            <Separator className="text-gray-300" dashed />
            <div className="flex items-center justify-between font-bold text-sm lg:text-base">
                <div>Grand Total</div>
                <div>{formatNumber(147000, { currency: 'IDR' })}</div>
            </div>
        </div>
    );
}
