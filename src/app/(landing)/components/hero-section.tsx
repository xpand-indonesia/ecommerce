"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {

    return (
        <section className="relative min-h-[720px] lg:h-[727px] w-full flex flex-col justify-between pt-[100px] pb-12 px-6 lg:px-[60px] mx-auto overflow-hidden" >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-black/40" />
            </div >

            < div className="flex flex-col justify-end h-full mt-auto mb-12 max-w-[1320px] mx-auto w-full" >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
                    {/* Left Column: Heading, Subtext, CTA */}
                    <div className="flex flex-col items-start gap-6 max-w-[701px]">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[96px] text-white tracking-tight">
                            Your Advanced <br />
                            Coffee Shop
                        </h1>

                        <p className="font-body text-base sm:text-lg text-white/90 max-w-[426px] leading-[22px]">
                            Every year. Starting 160+ Orders with pure conditions.
                            Just $488 &rarr; $365 per year - $1 per day.
                        </p>

                        <Button
                            variant="primary"
                            className="mt-2 h-[51px] px-8 cursor-pointer font-semibold shadow-lg shadow-black/20"
                            onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Start Ordering
                        </Button>
                    </div>

                    {/* Right Column: Statistics Grid */}
                    <div className="flex items-center gap-6 sm:gap-8 bg-black/35 backdrop-blur-md px-6 py-5 rounded-[24px] border border-white/10 self-start lg:self-auto">
                        {/* Stat 1 */}
                        <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[120px]">
                            <span className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">
                                140+ Branches
                            </span>
                            <span className="font-body text-xs sm:text-sm text-gray-light">
                                Total per 2026
                            </span>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-[1px] h-[50px] bg-white/20" />

                        {/* Stat 2 */}
                        <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[120px]">
                            <span className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">
                                120+ Loyal
                            </span>
                            <span className="font-body text-xs sm:text-sm text-gray-light">
                                Customers
                            </span>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-[1px] h-[50px] bg-white/20" />

                        {/* Stat 3 */}
                        <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[120px]">
                            <span className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">
                                $2 per day
                            </span>
                            <span className="font-body text-xs sm:text-sm text-gray-light">
                                $365 per year
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
