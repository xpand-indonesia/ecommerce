"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BannerSection() {
    // Full Width Banner slider state
    const [activeBannerSlide, setActiveBannerSlide] = useState(1);
    const totalBannerSlides = 5;

    const handlePrevSlide = () => {
        setActiveBannerSlide((prev) => (prev === 0 ? totalBannerSlides - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setActiveBannerSlide((prev) => (prev === totalBannerSlides - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full h-[547px] overflow-hidden">
            {/* Banner Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/mock/mock_banner.png"
                    alt="Artisan coffee beans roasting"
                    fill
                    className="object-cover brightness-[0.8]"
                />
            </div>

            {/* Left Navigation Arrow */}
            <button
                onClick={handlePrevSlide}
                aria-label="Previous slide"
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full border border-white/80 hover:border-white flex items-center justify-center text-white hover:bg-white/10 cursor-pointer z-10 transition-all duration-200"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
                onClick={handleNextSlide}
                aria-label="Next slide"
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full border border-white/80 hover:border-white flex items-center justify-center text-white hover:bg-white/10 cursor-pointer z-10 transition-all duration-200"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>

            {/* Banner Slider Center CTA */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-[80px] z-10">
                <Button
                    variant="primary"
                    className="h-[51px] px-10 cursor-pointer font-bold shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                    Buy Coffee
                </Button>
            </div>

            {/* Carousel Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {Array.from({ length: totalBannerSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveBannerSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeBannerSlide === idx ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
