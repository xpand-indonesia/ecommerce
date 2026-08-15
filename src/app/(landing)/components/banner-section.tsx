'use client';

import Carousel, { CarouselSlide } from '@/components/icons/carousel';
import { useState } from 'react';

const HERO_SLIDES: CarouselSlide[] = [
    {
        id: '1',
        title: 'Five times more active compounds that actually work!',
        subtitle:
            'Assessed based on the yield of active compounds rather than the total weight of the coffee.',
        ctaText: 'Get Started',
        ctaLink: '#',
        background:
            'bg-[url("/images/mock/mock_banner.png")] bg-cover bg-center',
    },
    {
        id: '2',
        title: 'Five times more active compounds that actually work!',
        subtitle:
            'Assessed based on the yield of active compounds rather than the total weight of the coffee.',
        ctaText: 'Explore Styles',
        ctaLink: '#',
        background:
            'bg-[url("/images/mock/mock_banner.png")] bg-cover bg-center',
    },
    {
        id: '3',
        title: 'Five times more active compounds that actually work!',
        subtitle:
            'Assessed based on the yield of active compounds rather than the total weight of the coffee.',
        ctaText: 'Learn More',
        ctaLink: '#',
        background:
            'bg-[url("/images/mock/mock_banner.png")] bg-cover bg-center',
    },
];

export default function BannerSection() {
    // Full Width Banner slider state
    const [activeBannerSlide, setActiveBannerSlide] = useState(1);
    const totalBannerSlides = 5;

    const handlePrevSlide = () => {
        setActiveBannerSlide((prev) =>
            prev === 0 ? totalBannerSlides - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setActiveBannerSlide((prev) =>
            prev === totalBannerSlides - 1 ? 0 : prev + 1
        );
    };

    return (
        <section>
            <Carousel
                slides={HERO_SLIDES}
                className="h-[358px] lg:h-[547px]"
                autoPlayInterval={0}
            />
        </section>
    );
}
