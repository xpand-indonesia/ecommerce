import React from 'react';
import { formatNumber } from '@/lib/utils';
import { HeaderProp } from '@/components/layout';
import { ProductItem } from '@/components/product-item';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ApplyCouponForm, CartSummary } from '@/features/cart';
import { InputCounter } from '@/components/ui/form/field/input-counter';
import { Badge } from '@/components/ui/badge';
import { Plus } from '@/components/icons';
import { XCircle } from '@/components/icons/x-circle';

export default function CartPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="header-safe py-8 px-10">
                <div className="flex">
                    <div className="flex-1 pr-6 mr-6 border-r border-gray-300 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <ContentTitle>Cart</ContentTitle>
                            <div className="text-primary">0 Items</div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <React.Fragment key={`cart-item-${idx}`}>
                                    {idx > 0 && (
                                        <Separator className="bg-gray-300" />
                                    )}
                                    <div className="flex gap-4 relative">
                                        <div className="size-[100px] bg-[#F7F7F7] rounded-[16px]"></div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div>
                                                <div>Funki Mushroom Coffee</div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <div className="line-through text-gray-500">
                                                        {formatNumber(60000, {
                                                            currency: 'IDR',
                                                        })}
                                                    </div>
                                                    <div className="text-gray-800">
                                                        {formatNumber(60000, {
                                                            currency: 'IDR',
                                                        })}
                                                    </div>
                                                    <Badge
                                                        variant="danger"
                                                        className="uppercase"
                                                    >
                                                        Off 20%
                                                    </Badge>
                                                </div>
                                                <div className="text-sm text-gray-800 mt-1">
                                                    27oz - Red Bean
                                                </div>
                                            </div>
                                            <div>
                                                <InputCounter
                                                    className="h-[33px] max-w-[160px]"
                                                    value={2}
                                                />
                                            </div>
                                            <div className="text-primary text-sm flex items-center gap-2 py-2">
                                                <Plus className="size-4" />
                                                Add Note
                                            </div>
                                        </div>
                                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[28.125%] size-8 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer">
                                            <XCircle className="text-primary" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <Separator className="bg-gray-300" />
                        <ContentTitle>Recommendation For You</ContentTitle>
                        <div className="grid grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <ProductItem
                                    key={`recommendation-product-${idx}`}
                                    id="1"
                                    image="mock_product_1.png"
                                    name="Funki Mushroom Coffee"
                                    price={60000}
                                    discount={0}
                                    stock={1000}
                                    isBestSeller={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-[443px] flex flex-col gap-6">
                        <ContentTitle>Summary</ContentTitle>
                        <div className="flex flex-col gap-4">
                            <ApplyCouponForm />
                            <CartSummary />
                        </div>
                        <Link href="/checkout">
                            <Button className="w-full">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}
