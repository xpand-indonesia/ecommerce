'use client';

import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
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

            {/* ================= CATEGORY / CARDS SECTION ================= */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-4">
                {/* Card 1: Single Origins */}
                <div className="relative h-[588px] flex flex-col justify-between items-center text-center p-8 md:p-12 text-white overflow-hidden group">
                    {/* Background image */}
                    <Image
                        src="/images/card-single-origins.png"
                        alt="Premium single origin coffee beans"
                        fill
                        className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                    />
                    {/* Symmetrical dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 -z-10" />
                    <div className="h-10" /> {/* Top Spacer */}
                    {/* Main Content */}
                    <div className="flex flex-col items-center gap-6 mt-auto max-w-[320px] z-10">
                        <h3 className="font-heading font-bold text-3xl leading-tight">
                            See Single Origins
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-white/95">
                            We get new single origins each week that come from
                            all around the world! Explore the new offerings and
                            find your new favourite way to start the day!
                        </p>
                        <Button
                            variant="outline-white"
                            className="mt-2 h-[51px] px-8 cursor-pointer"
                        >
                            See Offerings
                        </Button>
                    </div>
                </div>

                {/* Card 2: Bulk purchasing */}
                <div className="relative h-[588px] flex flex-col justify-between items-center text-center p-8 md:p-12 text-white overflow-hidden group border-y lg:border-y-0 lg:border-x border-white/10">
                    {/* Background image */}
                    <Image
                        src="/images/card-bulk.png"
                        alt="Bulk purchase burlap coffee bean bags"
                        fill
                        className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 -z-10" />

                    <div className="h-10" />

                    {/* Main Content */}
                    <div className="flex flex-col items-center gap-6 mt-auto max-w-[320px] z-10">
                        <h3 className="font-heading font-bold text-3xl leading-tight">
                            Bulk purchasing
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-white/95">
                            Join us as a partner. Wholesale is at the core of
                            our operations. Funki {`isn't`} just another
                            publicly traded company filled with investors and
                            venture capitalists.
                        </p>
                        <Button
                            variant="outline-white"
                            className="mt-2 h-[51px] px-8 cursor-pointer"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Card 2: Bulk purchasing */}
                <div className="relative h-[588px] flex flex-col justify-between items-center text-center p-8 md:p-12 text-white overflow-hidden group border-y lg:border-y-0 lg:border-x border-white/10">
                    {/* Background image */}
                    <Image
                        src="/images/card-bulk.png"
                        alt="Bulk purchase burlap coffee bean bags"
                        fill
                        className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 -z-10" />

                    <div className="h-10" />

                    {/* Main Content */}
                    <div className="flex flex-col items-center gap-6 mt-auto max-w-[320px] z-10">
                        <h3 className="font-heading font-bold text-3xl leading-tight">
                            Bulk purchasing
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-white/95">
                            Join us as a partner. Wholesale is at the core of
                            our operations. Funki {`isn't`} just another
                            publicly traded company filled with investors and
                            venture capitalists.
                        </p>
                        <Button
                            variant="outline-white"
                            className="mt-2 h-[51px] px-8 cursor-pointer"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Card 4: Wholesale */}
                <div className="relative h-[588px] flex flex-col justify-between items-center text-center p-8 md:p-12 text-white overflow-hidden group">
                    {/* Background image */}
                    <Image
                        src="/images/card-wholesale.png"
                        alt="Artisan coffee bar wholesale operation"
                        fill
                        className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 -z-10" />

                    <div className="h-10" />

                    {/* Main Content */}
                    <div className="flex flex-col items-center gap-6 mt-auto max-w-[320px] z-10">
                        <h3 className="font-heading font-bold text-3xl leading-tight">
                            Wholesale
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-white/95">
                            Become our partner! Wholesale is central to what we
                            do. Funki stands out from typical publicly traded
                            companies that are merely driven by investors and
                            venture capital.
                        </p>
                        <Button
                            variant="outline-white"
                            className="mt-2 h-[51px] px-8 cursor-pointer"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
