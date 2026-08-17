import { formatNumber } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/form/field/select';

interface ProductBundleItem {
    name?: string;
    description?: string;
    price?: number;
    discount?: number;
}

export const ProductBundleItem = ({
    name,
    description,
    price = 0,
    discount = 0,
}: ProductBundleItem) => {
    const discountedPrice: number = price - discount;
    const imageUrl = '/images/mock/mock_product_1.png';

    return (
        <div className="flex lg:items-stretch gap-4">
            <div className="relative overflow-hidden size-[120px] rounded-[8.78px] lg:size-[150px] bg-gray-200 lg:rounded-[10.98px]">
                <Image
                    src={imageUrl}
                    alt={name ?? ''}
                    fill
                    sizes="(max-width: 768px) 20vw"
                    className="object-cover"
                />
            </div>
            <div className="grow flex flex-col lg:justify-between">
                <div className="space-y-2">
                    <div className="flex flex-col lg:flex-row items-start gap-1 lg:justify-between lg:items-center lg:gap-2">
                        <div className="text-sm leading-[17px] font-bold order-2 lg:text-base lg:leading-[19px] lg:order-1">
                            {name}
                        </div>
                        {discount > 0 && (
                            <Badge
                                variant="danger"
                                className="p-1 text-xs leading-[14px] order-1 lg:order-2"
                            >
                                SAVE{' '}
                                {formatNumber(discount, { currency: 'IDR' })}
                            </Badge>
                        )}
                    </div>
                    <div className="text-xs leading-[14px] text-gray-500">
                        {description}
                    </div>
                    <div className="flex gap-2 text-sm leading-[17px]">
                        <div className="text-gray-500 line-through">
                            {formatNumber(price, { currency: 'IDR' })}
                        </div>
                        <div className="text-gray-800">
                            {formatNumber(discountedPrice, { currency: 'IDR' })}
                        </div>
                    </div>
                </div>
                <Select value={'1'}>
                    <SelectTrigger className="h-8.25 bg-transparent text-sm mt-6.75 lg:text-base lg:mt-0 [&>span]:text-left">
                        <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={'1'}>
                            {'10.9oz / Whole Bean'}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};
