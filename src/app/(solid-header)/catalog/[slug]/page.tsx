'use client';

import { ProductItem } from "@/components/product-item";
import { Button } from "@/components/ui/button";
import React, { use } from "react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function CatalogPage({ params }: PageProps) {
    const { slug } = use(params);

    return (
        <main className="flex-1 w-full pt-[75px]">
            <div className="container mx-auto py-8 px-4 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading capitalize text-5xl">{slug}</h2>
                    <Button variant="outline" className="group gap-2">
                        <svg className="text-gray-800 group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 17H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
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
            </div>
        </main>
    );
}