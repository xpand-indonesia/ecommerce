'use client';

import { HamburgerMenu } from '@/components/icons/hamburger-menu';
import { ProductItem } from '@/components/product-item';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Label } from '@/components/ui/form/label';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FilterItemCollapsible } from '../components/filter-item-collapsible';
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
                    <div className="w-[319px] h-full pr-6 mr-6 border-r border-gray-300 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-heading font-bold text-3xl lg:text-4xl">
                                Filters
                            </h2>
                            <div className="text-primary">42 Results</div>
                        </div>
                        <FilterItemCollapsible title="Roast Level">
                            <div className="space-y-2">
                                <div className="h-[48px] border border-gray-300 rounded-full"></div>
                                <div className="flex items-center justify-between text-sm text-gray-800">
                                    <div>Darker</div>
                                    <div>Lighter</div>
                                </div>
                            </div>
                        </FilterItemCollapsible>
                        <FilterItemCollapsible title="Origin">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="origin-burundi" />
                                    <Label
                                        htmlFor="origin-burundi"
                                        className="text-sm font-medium text-gray-700 cursor-pointer"
                                    >
                                        Burundi
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="origin-colombia" />
                                    <Label
                                        htmlFor="origin-colombia"
                                        className="text-sm font-medium text-gray-700 cursor-pointer"
                                    >
                                        Colomiba
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="origin-ecuador" />
                                    <Label
                                        htmlFor="origin-ecuador"
                                        className="text-sm font-medium text-gray-700 cursor-pointer"
                                    >
                                        Ecuador
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="origin-mexico" />
                                    <Label
                                        htmlFor="origin-mexico"
                                        className="text-sm font-medium text-gray-700 cursor-pointer"
                                    >
                                        Mexico
                                    </Label>
                                </div>
                            </div>
                        </FilterItemCollapsible>
                        <FilterItemCollapsible title="Profile">
                            <div className="space-y-2">
                                <div className="h-[48px] border border-gray-300 rounded-full"></div>
                                <div className="flex items-center justify-between text-sm text-gray-800">
                                    <div>Traditional</div>
                                    <div>Modern</div>
                                </div>
                            </div>
                        </FilterItemCollapsible>
                        <FilterItemCollapsible title="Process">
                            <div className="space-y-2"></div>
                        </FilterItemCollapsible>
                        <FilterItemCollapsible title="Variety">
                            <div className="space-y-2"></div>
                        </FilterItemCollapsible>
                        <Button className="w-full">Apply</Button>
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
