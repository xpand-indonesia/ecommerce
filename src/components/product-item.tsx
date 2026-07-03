import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatNumber } from "@/lib/utils";
import { useMemo } from "react";
import Link from "next/link";

interface ProductItemProps {
    id?: number | string;
    image: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    isBestSeller?: boolean
};

const ProductItem = ({ id, image, name, price, discount, stock, isBestSeller = false }: ProductItemProps) => {
    const imageUrl = useMemo(() => {
        return `/images/mock/${image}`;
    }, [image]);

    const discountedPrice = useMemo(() => {
        return price - discount;
    }, [price, discount]);

    const discountPercentage = useMemo(() => {
        return discount / price * 100;
    }, [price, discount]);

    return (
        <div className="flex flex-col gap-4 group">
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
                        <Badge className="absolute top-4 left-4 bg-red text-white px-6.5 py-3">
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
                <h3 className="text-xl transition-colors">
                    {name}
                </h3>
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
                        <Badge variant="danger">OFF {formatNumber(discountPercentage)}%</Badge>
                    )}
                </div>
            </div>

            {/* Click to Action */}
            {stock > 0 ? (
                <Button variant="outline">Add to Cart</Button>
            ) : (
                <Button variant="primary">Remind Me</Button>
            )}
        </div>
    );
};

export {
    ProductItem
};