'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

interface Statistic {
    title: string;
    subtitle: string;
}

const STATISTICS: Statistic[] = [
    {
        title: '140+ Branches',
        subtitle: 'Total per 2026',
    },
    {
        title: '120+ Loyal',
        subtitle: 'Customers',
    },
    {
        title: '$2 per day',
        subtitle: '$365 per year',
    },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-[720px] lg:h-[727px] w-full flex flex-col justify-between pt-[100px] pb-4 lg:pb-15.5 px-4 lg:px-[60px] mx-auto overflow-hidden">
            {/* Background image using Next.js Image component */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/mock/mock_hero_image.jpg"
                    alt="Artisan coffee preparation in cafe"
                    fill
                    priority
                    className="object-cover object-top brightness-95"
                />
                {/* Dark gradient overlay matching design */}
                <div className="absolute inset-0 bg-gradient-to-b from-t via-black/0 to-black" />
            </div>

            <div className="flex flex-col justify-end h-full mt-auto w-full">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-12 w-full">
                    {/* Left Column: Heading, Subtext, CTA */}
                    <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-[701px]">
                        <h1 className="font-heading font-bold text-3xl lg:text-[72px] text-white">
                            Your Advanced <br />
                            Coffee Shop
                        </h1>

                        <p className="font-body text-sm sm:text-lg text-white/90 max-w-[426px] leading-[22px]">
                            Every year. Starting 160+ Orders with pure
                            conditions. Just $488 &rarr; $365 per year - $1 per
                            day.
                        </p>

                        <Button
                            variant="primary"
                            className="px-4 cursor-pointer"
                            onClick={() =>
                                document
                                    .getElementById('catalog')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Start Ordering
                        </Button>
                    </div>

                    {/* Right Column: Statistics Grid */}
                    <div className="grid grid-cols-2 lg:flex lg:items-center gap-4">
                        {STATISTICS.map((item, idx) => (
                            <React.Fragment key={`statistic-${idx}`}>
                                {!!idx && (
                                    <Separator
                                        orientation="vertical"
                                        className="hidden lg:block h-[73px] bg-gray-300"
                                    />
                                )}
                                <div className="flex flex-col gap-2 lg:w-[170px]">
                                    <span className="font-heading font-bold text-base lg:text-2xl text-white leading-tight">
                                        {item.title}
                                    </span>
                                    <span className="font-body text-xs lg:text-sm text-gray-light">
                                        {item.subtitle}
                                    </span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
