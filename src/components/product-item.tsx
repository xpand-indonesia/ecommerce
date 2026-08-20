'use client';

import DialogContent, {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { cn, formatNumber } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { InputCounter } from './ui/form/field/input-counter';

interface ProductItemProps {
    id?: number | string;
    image: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    isBestSeller?: boolean;
    className?: string;
}

const ProductItem = ({
    id,
    image,
    name,
    price,
    discount,
    stock,
    isBestSeller = false,
    className,
}: ProductItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const imageUrl = useMemo(() => {
        return `/images/mock/${image}`;
    }, [image]);

    const discountedPrice = useMemo(() => {
        return price - discount;
    }, [price, discount]);

    const discountPercentage = useMemo(() => {
        return (discount / price) * 100;
    }, [price, discount]);

    return (
        <div className={cn('flex flex-col gap-4 group', className)}>
            {/* Product Image */}
            <Link href={`/product/${id}`}>
                <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200">
                    <Image
                        src={imageUrl}
                        alt="Funki Mushroom Coffee pack"
                        fill
                        sizes="(max-width: 768px) 100vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    {!!isBestSeller && (
                        <Badge
                            className="absolute top-4 left-4 bg-red text-white px-[27px] py-3"
                            size="sm"
                        >
                            Best Seller
                        </Badge>
                    )}
                    {stock <= 0 && (
                        <div className="absolute h-[21%] top-1/2 -translate-y-1/2 left-0 right-0 bg-red/40 flex items-center justify-center">
                            <span className="text-white text-2xl uppercase">
                                Out of Stock
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Product Information */}
            <div className="flex flex-col gap-2">
                <h3 className="text-xl transition-colors">{name}</h3>
                <div className="flex items-center gap-2">
                    {discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                            {formatNumber(price, { currency: 'IDR' })}
                        </span>
                    )}
                    <span className="text-base">
                        {formatNumber(discountedPrice, { currency: 'IDR' })}
                    </span>
                    {discount > 0 && (
                        <Badge variant="danger">
                            OFF {formatNumber(discountPercentage)}%
                        </Badge>
                    )}
                </div>
            </div>

            {/* Click to Action */}
            {stock > 0 ? (
                <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add to Cart</Button>
                    </DialogTrigger>
                    <DialogContent
                        className={cn(
                            'w-full h-full rounded-b-none lg:max-w-[970px] lg:h-auto lg:rounded-b-2xl'
                        )}
                    >
                        <DialogHeader>
                            <DialogTitle>Detail Product</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 flex flex-col lg:flex-row gap-4 px-4 py-2 lg:py-4">
                            <div className="flex-1 max-w-[448px] space-y-4 lg:space-y-6">
                                <div className="w-full aspect-[343/318] lg:aspect-square bg-[#f7f7f7] rounded-2xl" />
                                <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-x-visible gap-4">
                                    {Array.from({ length: 4 }).map((_, idx) => (
                                        <div
                                            key={`product-image-${idx}`}
                                            className={cn(
                                                'w-[100px] min-w-[100px] lg:w-full lg:min-w-auto aspect-square bg-[#f7f7f7] rounded-2xl',
                                                !idx
                                                    ? 'border border-primary'
                                                    : ''
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-xl leading-[24px] lg:font-bold lg:text-3xl lg:leading-[1.2]">
                                        Funki Mushroom Coffee
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="line-through text-sm leading-[17px] text-gray-500">
                                            {formatNumber(60000, {
                                                currency: 'IDR',
                                            })}
                                        </div>
                                        <div className="text-lg leading-[22px] text-gray-800">
                                            {formatNumber(60000, {
                                                currency: 'IDR',
                                            })}
                                        </div>
                                        <Badge variant="danger">OFF 20%</Badge>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-base leading-[19px] text-gray-800">
                                        Size
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {[
                                            { label: '27oz', disabled: false },
                                            { label: '32oz', disabled: false },
                                            { label: '46oz', disabled: true },
                                        ].map((size, idx) => (
                                            <div
                                                key={`size-${idx}`}
                                                className={cn(
                                                    'text-sm leading-[17px] text-primary border rounded-full py-2 px-4',
                                                    !idx
                                                        ? 'border-primary'
                                                        : 'border-gray-300',
                                                    size.disabled
                                                        ? 'text-gray-400 bg-gray-300 border-gray-200'
                                                        : 'bg-white'
                                                )}
                                            >
                                                {size.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-base leading-[19px] text-gray-800">
                                        Colour
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {[
                                            {
                                                label: 'Red',
                                                color: '#F04438',
                                                border: '#F04438',
                                                disabled: false,
                                            },
                                            {
                                                label: 'White',
                                                color: '#FFFFFF',
                                                border: '#D5D7DA',
                                                disabled: false,
                                            },
                                            {
                                                label: 'Purple',
                                                color: '#D3BFFB',
                                                border: '#D3BFFB',
                                                disabled: true,
                                            },
                                        ].map((size, idx) => (
                                            <div
                                                key={`size-${idx}`}
                                                className={cn(
                                                    'flex items-center gap-[10px] text-sm leading-[17px] text-primary border rounded-full py-2 px-4',
                                                    !idx
                                                        ? 'border-primary'
                                                        : 'border-gray-300',
                                                    size.disabled
                                                        ? 'text-gray-400 bg-gray-300 border-gray-200'
                                                        : 'bg-white'
                                                )}
                                            >
                                                <div
                                                    className="size-4 border rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            size.color,
                                                        borderColor:
                                                            size.border,
                                                    }}
                                                />
                                                {size.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <InputCounter value={1} className="h-[40px]" />
                                <Button className="w-full">Add to Cart</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ) : (
                <Button variant="primary">Remind Me</Button>
            )}
        </div>
    );
};

export { ProductItem };
