'use client';

import { HamburgerMenu } from '@/components/icons/hamburger-menu';
import { HeaderProp } from '@/components/layout';
import { ProductItem } from '@/components/product-item';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import React, { use } from 'react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function CatalogPage({ params }: PageProps) {
    const { slug } = use(params);

    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-8 lg:px-10 header-safe-8 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading font-bold lg:font-normal capitalize text-3xl lg:text-5xl">
                        {slug}
                    </h2>
                    <Button
                        variant="outline"
                        className="group gap-2 h-10 px-[18.5px] lg:h-14 lg:px-12.5"
                    >
                        <HamburgerMenu className="size-6 text-gray-800" />
                        Filter
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <React.Fragment key={`row-${index}`}>
                            <ProductItem
                                id="1"
                                image="mock_product_1.png"
                                name="Funki Mushroom Coffee"
                                price={60000}
                                discount={0}
                                stock={1000}
                                isBestSeller={true}
                            />
                            <ProductItem
                                id="1"
                                image="mock_product_2.png"
                                name="Organic Chai Latte pack"
                                price={75000}
                                discount={7000}
                                stock={1000}
                            />
                            <ProductItem
                                id="1"
                                image="mock_product_3.png"
                                name="Vanilla Hazelnut Brew pack"
                                price={70000}
                                discount={0}
                                stock={0}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </>
    );
}
