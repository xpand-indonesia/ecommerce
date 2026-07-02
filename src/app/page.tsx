"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
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
    <>
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[720px] lg:h-[727px] w-full flex flex-col justify-between pt-[100px] pb-12 px-6 lg:px-[60px] mx-auto overflow-hidden">
          {/* Background image using Next.js Image component */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero-bg.png"
              alt="Artisan coffee preparation in cafe"
              fill
              priority
              className="object-cover brightness-95"
            />
            {/* Dark gradient overlay matching design */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          </div>

          {/* Hero Main Content */}
          <div className="flex flex-col justify-end h-full mt-auto mb-12 max-w-[1320px] mx-auto w-full">
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
          </div>
        </section>


        {/* ================= PRODUCT SECTION ================= */}
        <section id="catalog" className="w-full bg-white py-16 md:py-24 px-6 lg:px-[100px] max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-[877px]">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark leading-tight">
                Optimise for your needs
              </h2>
              <p className="font-body text-base text-gray">
                For best results, commit to 90 days. If you’re not satisfied, our 30-day risk-free guarantee lets you return it - no questions asked
              </p>
            </div>

            <Button variant="outline" className="h-[51px] px-8 cursor-pointer hover:shadow-md shrink-0 self-start md:self-auto">
              See All
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
            {/* Product Card 1 */}
            <div className="flex flex-col gap-5 group">
              {/* Product Image Frame */}
              <div className="relative aspect-[392/400] w-full rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35">
                <Image
                  src="/images/product-1.png"
                  alt="Funki Mushroom Coffee pack"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />

                {/* Slashed red badge for "Best Seller" */}
                <div className="absolute top-4 left-4 bg-red text-white font-body text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                  Best Seller
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-body font-bold text-xl text-dark group-hover:text-primary transition-colors">
                  Funki Mushroom Coffee
                </h3>

                {/* Pricing layout */}
                <div className="flex items-center gap-3">
                  <span className="bg-red/10 text-red font-body text-xs font-bold px-2 py-0.5 rounded-md">
                    OFF 20%
                  </span>
                  <span className="font-body font-bold text-base text-dark">
                    Rp 60,000
                  </span>
                  <span className="font-body text-sm text-gray line-through">
                    Rp 75,000
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button variant="outline" className="w-full cursor-pointer">
                Add to cart
              </Button>
            </div>

            {/* Product Card 2 */}
            <div className="flex flex-col gap-5 group">
              {/* Product Image Frame */}
              <div className="relative aspect-[392/400] w-full rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35">
                <Image
                  src="/images/product-2.png"
                  alt="Organic Chai Latte pack"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-body font-bold text-xl text-dark group-hover:text-primary transition-colors">
                  Organic Chai Latte
                </h3>

                {/* Pricing layout */}
                <div className="flex items-center gap-3">
                  <span className="bg-red/10 text-red font-body text-xs font-bold px-2 py-0.5 rounded-md">
                    OFF 10%
                  </span>
                  <span className="font-body font-bold text-base text-dark">
                    Rp 68,000
                  </span>
                  <span className="font-body text-sm text-gray line-through">
                    Rp 75,000
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button variant="outline" className="w-full cursor-pointer">
                Add to cart
              </Button>
            </div>

            {/* Product Card 3 (Out of Stock) */}
            <div className="flex flex-col gap-5 group">
              {/* Product Image Frame */}
              <div className="relative aspect-[392/400] w-full rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35">
                <Image
                  src="/images/product-3.png"
                  alt="Vanilla Hazelnut Brew pack"
                  fill
                  className="object-cover brightness-90 group-hover:scale-102 transition-transform duration-300"
                />

                {/* Semi-transparent red out of stock overlay */}
                <div className="absolute inset-0 bg-red/40 backdrop-blur-xxs flex items-center justify-center">
                  <span className="text-white font-body font-black text-2xl tracking-wider uppercase px-6 py-3 border-2 border-white rounded-lg">
                    Out of Stock
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-body font-bold text-xl text-dark group-hover:text-primary transition-colors">
                  Vanilla Hazelnut Brew
                </h3>

                {/* Pricing layout */}
                <div className="flex items-center gap-3">
                  <span className="font-body font-bold text-base text-dark">
                    Rp 70,000
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button variant="primary" className="w-full cursor-pointer">
                Remind Me
              </Button>
            </div>
          </div>
        </section>


        {/* ================= FULL WIDTH BANNER SECTION ================= */}
        <section className="relative w-full h-[547px] max-w-[1440px] mx-auto overflow-hidden">
          {/* Banner Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner.png"
              alt="Artisan coffee beans roasting"
              fill
              className="object-cover brightness-[0.8]"
            />
            {/* Contrast Overlay */}
            <div className="absolute inset-0 bg-black/20" />
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


        {/* ================= COME VISIT US SECTIONS ================= */}

        {/* Section 1: Left Image, Right Text */}
        <section className="w-full bg-white py-16 px-6 lg:px-[100px] max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
            {/* Left Image Frame */}
            <div className="relative w-full lg:w-[604px] aspect-[604/455] rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35 shadow-sm">
              <Image
                src="/images/visit-section-1.png"
                alt="Beautiful local coffee cafe interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Text Block */}
            <div className="flex flex-col gap-6 lg:w-[604px] items-start">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark leading-tight">
                Come Visit Us
              </h2>
              <p className="font-body text-base text-gray leading-relaxed">
                Our community is at the heart of what we do. You can learn more about each of our unique cafes all across Northwest Arkansas as well as our restaurant in Johnson. See cafe hours, explore the menu, and make plans to come see us any day of the week!
              </p>
              <Button variant="outline" className="h-[51px] px-8 cursor-pointer mt-2 hover:shadow-sm">
                Our Location
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Left Text, Right Image */}
        <section className="w-full bg-white py-16 px-6 lg:px-[100px] max-w-[1440px] mx-auto border-t border-gray-light/20">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center w-full">
            {/* Right Image Frame */}
            <div className="relative w-full lg:w-[604px] aspect-[604/455] rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35 shadow-sm">
              <Image
                src="/images/visit-section-2.png"
                alt="Artisan coffee drinks presentation"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Text Block */}
            <div className="flex flex-col gap-6 lg:w-[604px] items-start">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark leading-tight">
                Come Visit Us
              </h2>
              <p className="font-body text-base text-gray leading-relaxed">
                Our community is at the heart of what we do. You can learn more about each of our unique cafes all across Northwest Arkansas as well as our restaurant in Johnson. See cafe hours, explore the menu, and make plans to come see us any day of the week!
              </p>
              <Button variant="outline" className="h-[51px] px-8 cursor-pointer mt-2 hover:shadow-sm">
                Our Location
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: Text above, Full-width Image below */}
        <section className="w-full bg-white py-16 px-6 lg:px-[100px] max-w-[1440px] mx-auto border-t border-gray-light/20">
          <div className="flex flex-col gap-10 w-full">
            {/* Header Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
              <div className="flex flex-col gap-4 max-w-[800px]">
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark leading-tight">
                  Come Visit Us
                </h2>
                <p className="font-body text-base text-gray leading-relaxed">
                  Our community is at the heart of what we do. You can learn more about each of our unique cafes all across Northwest Arkansas as well as our restaurant in Johnson. See cafe hours, explore the menu, and make plans to come see us any day of the week!
                </p>
              </div>
              <Button variant="outline" className="h-[51px] px-8 cursor-pointer hover:shadow-sm shrink-0 self-start lg:self-auto lg:mb-1">
                Our Location
              </Button>
            </div>

            {/* Bottom Full-width Image */}
            <div className="relative w-full aspect-[1240/455] rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35 shadow-sm">
              <Image
                src="/images/product-section.png"
                alt="Cofelty coffee processing and packaging facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>


        {/* ================= CATEGORY / CARDS SECTION ================= */}
        <section className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3">
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
                We get new single origins each week that come from all around the world! Explore the new offerings and find your new favourite way to start the day!
              </p>
              <Button variant="outline-white" className="mt-2 h-[51px] px-8 cursor-pointer">
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
                Join us as a partner. Wholesale is at the core of our operations. Funki{" "}
                {`isn't`} just another publicly traded company filled with investors and
                venture capitalists.
              </p>
              <Button variant="outline-white" className="mt-2 h-[51px] px-8 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>

          {/* Card 3: Wholesale */}
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
                Become our partner! Wholesale is central to what we do. Funki stands out from typical publicly traded companies that are merely driven by investors and venture capital.
              </p>
              <Button variant="outline-white" className="mt-2 h-[51px] px-8 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
