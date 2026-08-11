import { ArrowRight } from '@/components/icons/arrow-right';
import { formatNumber } from '@/lib/utils';

export function SelectShippingMethod() {
    return (
        <div className="flex items-center gap-2">
            <div className="size-10 rounded-lg bg-white border border-gray-200"></div>
            <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-800">JNE</div>
                <div className="text-xs text-gray-500">
                    +{formatNumber(23500, { currency: 'IDR' })}
                </div>
            </div>
            <div className="ml-auto">
                <ArrowRight className="size-6 text-gray-800" />
            </div>
        </div>
    );
}
