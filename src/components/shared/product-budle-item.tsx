import { formatNumber } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/form/field/select";
import Image from "next/image";

interface ProductBundleItem {
    name?: string;
    description?: string;
    price?: number;
    discount?: number;
};

export const ProductBundleItem = ({ name, description, price = 0, discount = 0 }: ProductBundleItem) => {
    const discountedPrice: number = price - discount;
    const imageUrl = '/images/mock/mock_product_1.png';

    return (
        <div className="flex items-stretch gap-4">
            <div className="relative overflow-hidden size-[150px] bg-gray-200 rounded-xl">
                <Image
                    src={imageUrl}
                    alt={name ?? ''}
                    fill
                    sizes="(max-width: 768px) 20vw"
                    className="object-cover"
                />
            </div>
            <div className="grow flex flex-col justify-between">
                <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                        <div className="font-bold">{name}</div>
                        {(discount > 0) && (
                            <Badge variant="danger" className="p-1 text-xs/none">
                                SAVE {formatNumber(discount, { currency: "IDR" })}
                            </Badge>
                        )}
                    </div>
                    <div className="text-xs text-gray-500">{description}</div>
                    <div className="flex gap-2 text-sm">
                        <div className="text-gray-500 line-through">
                            {formatNumber(price, { currency: "IDR" })}
                        </div>
                        <div className="text-gray-800">
                            {formatNumber(discountedPrice, { currency: "IDR" })}
                        </div>
                    </div>
                </div>
                <Select value={'1'}>
                    <SelectTrigger className="h-8.25 bg-transparent">
                        <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={"1"}>
                            {'10.9oz / Whole Bean'}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};