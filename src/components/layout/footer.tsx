'use client';

import { Facebook } from '@/components/icons/facebook';
import { Instagram } from '@/components/icons/instagram';
import { Linkedin } from '@/components/icons/linked-in';
import { Search } from '@/components/icons/search';
import { Tiktok } from '@/components/icons/tiktok';
import { Youtube } from '@/components/icons/youtube';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    return (
        <footer className="bg-gray-50 pt-6 lg:pt-[72px] pb-6">
            <Container className="flex flex-col gap-10 lg:px-[100px]">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
                        <h2 className="font-heading text-5xl text-gray-800">
                            Stay in Tune <br className="hidden md:inline" />
                            with the Beat
                        </h2>
                        <div className="flex flex-col gap-6 w-full lg:max-w-[608px]">
                            <p className="text-base text-gray-800">
                                Always be the first to get the latest promo,
                                news, and updates from Us via our newsletter.
                                Subscribe Now and get connected with us.
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="flex gap-2 w-full max-w-[608px]"
                            >
                                <div className="relative flex-1">
                                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <Search className="size-5 text-gray-800" />
                                    </span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        required
                                        className="w-full h-[52px] pl-12 pr-4 bg-white border border-[#E9EAEB] rounded-full text-base outline-none focus:border-primary transition-colors text-dark"
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
                                <span className="text-primary text-sm font-semibold animate-pulse">
                                    ✓ Thank you for subscribing!
                                </span>
                            )}
                        </div>
                    </div>
                    <Separator className="bg-gray-300" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-4 lg:gap-6 order-3 lg:order-1">
                            <h3 className="text-lg lg:text-xl text-gray-800">
                                Get to Know Us
                            </h3>
                            <div className="flex items-center gap-4">
                                <Link href="#" aria-label="Facebook">
                                    <Facebook className="size-8" />
                                </Link>
                                <Link href="#" aria-label="Linkedin">
                                    <Linkedin className="size-8" />
                                </Link>
                                <Link href="#" aria-label="Instagram">
                                    <Instagram className="size-8" />
                                </Link>
                                <Link href="#" aria-label="Tiktok">
                                    <Tiktok className="size-8" />
                                </Link>
                                <Link href="#" aria-label="YouTube">
                                    <Youtube className="size-8" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-6 order-1 lg:order-2">
                            <h3 className="text-lg lg:text-xl text-gray-800">
                                In Case You're Wondering
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {[
                                    'How to Order',
                                    'How to Contact Us',
                                    'Shipping Information',
                                    'Product Warranty',
                                    'Return & Refund',
                                    'Order Status',
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-gray-800 hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-3">
                            <h3 className="text-lg lg:text-xl text-gray-800">
                                Get in Touch
                            </h3>
                            <div className="flex flex-row lg:flex-col gap-6 text-gray-800">
                                <div className="flex flex-col gap-2">
                                    <span className="">Customer Service</span>
                                    <Link
                                        href="tel:+62811287711"
                                        className="hover:text-primary transition-colors"
                                    >
                                        +62 811287711
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="">Business Inquiries</span>
                                    <Link
                                        href="mailto:Funki@mail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Funki@mail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Separator className="bg-gray-300" />
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 text-sm text-gray-800">
                        <span>PT EXPAND INDONESIA</span>
                        <span>ALL RIGHTS RESERVED 2026 FUNKI+ COFFEE</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
