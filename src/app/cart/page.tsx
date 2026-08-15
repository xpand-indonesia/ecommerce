import { Plus } from '@/components/icons';
import { XCircle } from '@/components/icons/x-circle';
import { HeaderProp } from '@/components/layout';
import { ProductItem } from '@/components/product-item';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { InputCounter } from '@/components/ui/form/field/input-counter';
import { Separator } from '@/components/ui/separator';
import { ApplyCouponForm, CartSummary } from '@/features/cart';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export default function CartPage() {
    const items = Array.from({ length: 2 });

    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-4 header-safe-4 px-4 lg:py-8 lg:header-safe-8 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className="lg:flex-1 lg:pr-6 lg:mr-6 lg:border-r lg:border-gray-300 flex flex-col gap-4 lg:gap-6">
                        <div className="flex items-center justify-between">
                            <ContentTitle>Cart</ContentTitle>
                            <div className="text-primary text-sm lg:text-base">
                                {items.length} Items
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-6">
                            {items.map((_, idx) => (
                                <React.Fragment key={`cart-item-${idx}`}>
                                    {idx > 0 && (
                                        <Separator className="bg-gray-300" />
                                    )}
                                    <div className="flex gap-2 lg:gap-4 relative">
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
                                                    className="h-[40px] max-w-[145px] lg:h-[33px] lg:max-w-[160px]"
                                                    value={2}
                                                />
                                            </div>
                                            <div className="text-primary text-sm flex items-center gap-2 py-2">
                                                <Plus className="size-4" />
                                                <span className="leading-[1.214285714]">
                                                    Add Note
                                                </span>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[20.833333333%] lg:-translate-y-[28.125%] size-6 lg:size-8 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer">
                                            <XCircle className="text-primary size-3 lg:size-4" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <Separator className="bg-gray-300" />
                        <ContentTitle className="hidden lg:block">
                            Recommendation For You
                        </ContentTitle>
                        <div className="hidden lg:grid grid-cols-3 gap-6">
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
                    <div className="lg:w-[443px] flex flex-col gap-4 lg:gap-6">
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
