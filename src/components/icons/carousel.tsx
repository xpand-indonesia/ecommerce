'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from './arrow-left';
import { ArrowRight } from './arrow-right';

export interface CarouselSlide {
    id: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    background: string; // Tailwind gradient or background utility class
}

interface CarouselProps {
    slides: CarouselSlide[];
    autoPlayInterval?: number; // Optional autoplay in milliseconds (default: 6000)
    className?: string;
}

export default function Carousel({
    slides,
    autoPlayInterval = 6000,
    className,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Unlimited / Infinite scroll handlers using modulo arithmetic
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    // Optional automatic rotation
    useEffect(() => {
        if (!autoPlayInterval) return;
        const timer = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(timer);
    }, [autoPlayInterval, slides.length]);

    return (
        <div
            className={cn(
                'relative w-full overflow-hidden bg-neutral-950 text-white',
                className
            )}
        >
            {/* Sliding Track */}
            <div
                className="h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`w-full flex-shrink-0 min-h-[350px] flex flex-col items-center justify-center px-5 pt-6 pb-8 lg:pt-0 lg:pb-0 text-center ${slide.background}`}
                    >
                        <div className="grow lg:grow-0 flex flex-col gap-6 lg:gap-9 lg:max-w-[587px] lg:mx-auto">
                            <h2 className="font-heading text-3xl lg:text-5xl leading-[1.333333333] sm:text-5xl font-bold text-balance">
                                {slide.title}
                            </h2>
                            <p className="text-sm lg:text-base text-balance">
                                {slide.subtitle}
                            </p>
                            <div className="mt-auto lg:mt-0 pb-10.5 lg:pb-0">
                                <Link href="/">
                                    <Button className="w-[169px] h-[35px] bg-transparent border border-white lg:h-[51px] lg:bg-primary lg:border-0">
                                        Buy Coffee
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Navigation Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-5 bottom-18.5 lg:bottom-1/2 lg:translate-y-1/2 size-8 lg:size-12.5 flex items-center justify-center border border-white rounded-full text-white transition-all duration-200 focus:outline-none"
                aria-label="Previous slide"
            >
                <ArrowLeft className="size-[15.36px] lg:size-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-5 bottom-18.5 lg:bottom-1/2 lg:translate-y-1/2 size-8 lg:size-12.5 flex items-center justify-center border border-white rounded-full text-white transition-all duration-200 focus:outline-none"
                aria-label="Next slide"
            >
                <ArrowRight className="size-[15.36px] lg:size-6" />
            </button>

            {/* Capsule / Long Dot Indicators */}
            <div className="absolute bottom-6 lg:bottom-7.25 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 lg:h-3 w-[62.2px] lg:w-[127px] rounded-full transition-all duration-500 ${
                            currentIndex === index
                                ? 'bg-white'
                                : 'bg-white/30 hover:bg-white/60 cursor-pointer'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
