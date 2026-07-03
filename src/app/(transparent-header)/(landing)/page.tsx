"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/hero-section";
import BannerSection from "./components/banner-section";
import ProductSection from "./components/product-section";

export default function LandingPage() {

  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <ProductSection />
      <BannerSection />

      {/* ================= COME VISIT US SECTIONS ================= */}

      {/* Section 1: Left Image, Right Text */}
      <section className="w-full bg-white py-16 px-6 lg:px-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
          {/* Left Image Frame */}
          <div className="relative w-full lg:w-[604px] aspect-[604/455] rounded-[32px] overflow-hidden bg-gray-bg border border-gray-light/35 shadow-sm">
            <Image
              src="/images/mock/mock_image_1.png"
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
              src="/images/mock/mock_image_1.png"
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
              src="/images/mock/mock_image_2.png"
              alt="Cofelty coffee processing and packaging facility"
              fill
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
              Become our partner! Wholesale is central to what we do. Funki stands out from typical publicly traded companies that are merely driven by investors and venture capital.
            </p>
            <Button variant="outline-white" className="mt-2 h-[51px] px-8 cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
