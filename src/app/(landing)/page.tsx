'use client';

import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { BePartners } from '@/features/landing';
import Image from 'next/image';
import BannerSection from './components/banner-section';
import HeroSection from './components/hero-section';
import ProductSection from './components/product-section';

export default function LandingPage() {
    return (
        <>
            <HeaderProp style="transparent" />
            <HeroSection />
            <ProductSection />
            <BannerSection />
            <section className="w-full bg-white py-6 px-4 lg:px-25 lg:py-25">
                <div className="flex flex-col-reverse lg:flex-row-reverse gap-6 lg:gap-8">
                    <div className="lg:flex-1 relative w-full aspect-square lg:aspect-[604/455] rounded-4xl relative  overflow-hidden">
                        <Image
                            src="/images/mock/mock_image_1.png"
                            alt="Artisan coffee drinks presentation"
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:flex-1 flex flex-col gap-4 lg:gap-8 items-start">
                        <h2 className="font-heading text-3xl leading-[1.333333333] lg:text-5xl lg:leading-[0.9375] text-gray-800">
                            Come Visit Us
                        </h2>
                        <p className="text-base leading-[1.0625] lg:leading-[1.1875]">
                            Our community is at the heart of what we do. You can
                            learn more about each of our unique cafes all across
                            Northwest Arkansas as well as our restaurant in
                            Johnson. See cafe hours, explore the menu, and make
                            plans to come see us any day of the week!
                        </p>
                        <Button variant="outline" className="lg:px-[38.5px]">
                            Our Location
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-6 px-4 lg:px-25 lg:py-25">
                <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8">
                    <div className="lg:flex-1 relative w-full aspect-square lg:aspect-[604/455] rounded-4xl relative  overflow-hidden">
                        <Image
                            src="/images/mock/mock_image_2.png"
                            alt="Artisan coffee drinks presentation"
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:flex-1 flex flex-col gap-4 lg:gap-8 items-start">
                        <h2 className="font-heading text-3xl leading-[1.333333333] lg:text-5xl lg:leading-[0.9375] text-gray-800">
                            Come Visit Us
                        </h2>
                        <p className="text-base leading-[1.0625] lg:leading-[1.1875]">
                            Our community is at the heart of what we do. You can
                            learn more about each of our unique cafes all across
                            Northwest Arkansas as well as our restaurant in
                            Johnson. See cafe hours, explore the menu, and make
                            plans to come see us any day of the week!
                        </p>
                        <Button variant="outline" className="lg:px-[38.5px]">
                            Our Location
                        </Button>
                    </div>
                </div>
            </section>
            <section className="py-6 px-4 lg:px-25 lg:py-25">
                <div className="flex flex-col gap-4 lg:gap-8">
                    <div className="flex flex-col items-start gap-4 lg:gap-8 w-full">
                        <h2 className="font-heading text-3xl leading-[1.333333333] lg:text-5xl lg:leading-[0.9375] text-gray-800">
                            Come Visit Us
                        </h2>
                        <p className="text-base leading-[1.0625] lg:leading-[1.1875]">
                            Our community is at the heart of what we do. You can
                            learn more about each of our unique cafes all across
                            Northwest Arkansas as well as our restaurant in
                            Johnson. See cafe hours, explore the menu, and make
                            plans to come see us any day of the week!
                        </p>
                        <Button variant="outline" className="lg:px-[38.5px]">
                            Our Location
                        </Button>
                    </div>
                    <div className="lg:flex-1 relative w-full aspect-square lg:aspect-[1240/455] rounded-4xl relative  overflow-hidden">
                        <Image
                            src="/images/mock/mock_image_2.png"
                            alt="Cofelty coffee processing and packaging facility"
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section>
                <BePartners />
            </section>
        </>
    );
}
