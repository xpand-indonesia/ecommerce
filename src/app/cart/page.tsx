import React from 'react';
import { formatNumber } from '@/lib/utils';
import { HeaderProp } from '@/components/layout';
import { ProductItem } from '@/components/product-item';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { Separator } from '@/components/ui/separator';

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
                            {[{}, {}].map((item, idx) => (
                                <React.Fragment key={`cart-item-${idx}`}>
                                    {idx > 0 && (
                                        <Separator className="bg-gray-300" />
                                    )}
                                    <div className="flex gap-4">
                                        <div className="size-[100px] bg-[#F7F7F7] rounded-[16px]"></div>
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                <div>Funki Mushroom Coffee</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="line-through">
                                                        {formatNumber(60000, {
                                                            currency: 'IDR',
                                                        })}
                                                    </div>
                                                    <div>
                                                        {formatNumber(60000, {
                                                            currency: 'IDR',
                                                        })}
                                                    </div>
                                                    <div>Off 20%</div>
                                                </div>
                                                <div className="mt-1">
                                                    27oz - Red Bean
                                                </div>
                                            </div>
                                            <div>qty</div>
                                            <div>Add Note</div>
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
                    <div className="w-[443px]">
                        <ContentTitle>Summary</ContentTitle>
                    </div>
                </div>
            </Container>
        </>
    );
}
