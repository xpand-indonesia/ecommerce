'use client';

import { HamburgerMenu } from '@/components/icons/hamburger-menu';
import { ProductItem } from '@/components/product-item';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FilterForm } from '../components/filter-form';
import { FilterSheet } from '../components/filter-sheet';

export function CatalogListView({
    name,
    products = Array.from({ length: 12 }),
}: {
    name?: string;
    products?: any[];
}) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const toggleMobileFilter = () => {
        setIsMobileFilterOpen(!isFilterOpen);
    };

    return (
        <>
            <div className="flex items-stretch">
                <div
                    className={cn(
                        'hidden lg:flex flex-col items-end',
                        'overflow-hidden transition-all duration-500',
                        isFilterOpen ? 'w-[343px]' : 'w-0'
                    )}
                >
                    <div className="w-[319px] h-full pr-6 mr-6 border-r border-gray-300">
                        <FilterForm />
                    </div>
                </div>
                <div className="flex-1 space-y-4 lg:space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="font-heading font-bold capitalize text-3xl lg:text-4xl">
                            {name}
                        </h2>
                        <Button
                            variant="outline"
                            className="hidden lg:inline-flex group gap-2 h-10 px-[18.5px] lg:h-14 lg:px-12.5"
                            onClick={toggleFilter}
                        >
                            <HamburgerMenu className="size-6 text-gray-800 group-hover:text-white transition-colors" />
                            Filter
                        </Button>
                        <Button
                            variant="outline"
                            className="inline-flex lg:hidden group gap-2 h-10 px-[18.5px] lg:h-14 lg:px-12.5"
                            onClick={toggleMobileFilter}
                        >
                            <HamburgerMenu className="size-6 text-gray-800 group-hover:text-white transition-colors" />
                            Filter
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <React.Fragment key={`row-${idx}`}>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <ProductItem
                                        key={`product-${idx}-${index}`}
                                        id={index}
                                        image={
                                            index == 0
                                                ? 'mock_product_1.png'
                                                : index == 1
                                                  ? 'mock_product_2.png'
                                                  : 'mock_product_3.png'
                                        }
                                        name={
                                            index == 0
                                                ? 'Funki Mushroom Coffee'
                                                : index == 1
                                                  ? 'Organic Chai Latte pack'
                                                  : 'Vanilla Hazelnut Brew pack'
                                        }
                                        price={
                                            index == 0
                                                ? 60000
                                                : index == 1
                                                  ? 75000
                                                  : 70000
                                        }
                                        discount={
                                            index == 0
                                                ? 0
                                                : index == 1
                                                  ? 7000
                                                  : 0
                                        }
                                        stock={
                                            index == 0
                                                ? 1000
                                                : index == 1
                                                  ? 1000
                                                  : 0
                                        }
                                        isBestSeller={
                                            index == 0
                                                ? true
                                                : index == 1
                                                  ? false
                                                  : false
                                        }
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <FilterSheet
                open={isMobileFilterOpen}
                onOpenChange={setIsMobileFilterOpen}
            />
        </>
    );
}
