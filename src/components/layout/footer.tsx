"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../ui/container";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-footer-bg text-dark w-full lg:pt-[72px] lg:pb-6">
      <Container className="flex flex-col gap-10">
        {/* Footer Top */}
        <div className="flex flex-col gap-8">
          {/* Top Newsletter */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] lg:leading-[64px] tracking-tight max-w-[608px] text-gray-800">
              Stay in Tune <br className="hidden md:inline" />
              with the Beat
            </h2>
            <div className="flex flex-col gap-6 w-full lg:max-w-[608px]">
              <p className="font-body text-base text-gray leading-normal">
                Always be the first to get the latest promo, news, and updates from Us via our newsletter. Subscribe Now and get connected with us.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-[608px]">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray">
                    {/* search-normal icon matching Figma */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-[52px] pl-12 pr-4 bg-white border border-[#E9EAEB] rounded-full font-body text-base outline-none focus:border-primary transition-colors text-dark"
                  />
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="h-[52px] px-8 cursor-pointer shrink-0"
                >
                  Go
                </Button>
              </form>

              {subscribed && (
                <span className="text-primary font-body text-sm font-semibold animate-pulse">
                  ✓ Thank you for subscribing!
                </span>
              )}
            </div>
          </div>

          {/* Separator line */}
          <hr className="border-t border-gray-300 w-full" />

          {/* Middle Navigation columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[32px] w-full py-2">
            {/* Column 1: Get to Know Us & Socials */}
            <div className="flex flex-col gap-6">
              <h3 className="font-body font-bold text-lg md:text-xl text-dark">
                Get to Know Us
              </h3>
              {/* Social Icons matching design */}
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-gray-light flex items-center justify-center text-gray hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                {/* Linkedin */}
                <Link
                  href="#"
                  aria-label="Linkedin"
                  className="w-8 h-8 rounded-full border border-gray-light flex items-center justify-center text-gray hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                {/* Instagram */}
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-gray-light flex items-center justify-center text-gray hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* Tiktok */}
                <Link
                  href="#"
                  aria-label="Tiktok"
                  className="w-8 h-8 rounded-full border border-gray-light flex items-center justify-center text-gray hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a4 4 0 0 1-5-5" />
                  </svg>
                </Link>
                {/* YouTube */}
                <Link
                  href="#"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-gray-light flex items-center justify-center text-gray hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Column 2: In Case You’re Wondering */}
            <div className="flex flex-col gap-6">
              <h3 className="font-body font-bold text-lg md:text-xl text-dark">
                In Case You’re Wondering
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "How to Order",
                  "How to Contact Us",
                  "Shipping Information",
                  "Product Warranty",
                  "Return & Refund",
                  "Order Status",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-body text-base text-gray hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get in Touch */}
            <div className="flex flex-col gap-6">
              <h3 className="font-body font-bold text-lg md:text-xl text-dark">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-body text-base text-gray">
                    Customer Service
                  </span>
                  <Link
                    href="tel:+62811287711"
                    className="font-body text-base text-dark hover:text-primary font-semibold transition-colors"
                  >
                    +62 811287711
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-body text-base text-gray">
                    Business Inquiries
                  </span>
                  <Link
                    href="mailto:Funki@mail.com"
                    className="font-body text-base text-dark hover:text-primary font-semibold transition-colors"
                  >
                    Funki@mail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-2.5">
          <hr className="border-t border-gray-300 w-full" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-gray font-body py-1">
            <span className="font-semibold text-dark">PT EXPAND INDONESIA</span>
            <span>ALL RIGHTS RESERVED 2026 FUNKI+ COFFEE</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
