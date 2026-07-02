'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RegisterPage() {
    const submit = () => { }

    return (
        <main className="flex-1 w-full flex flex-co pt-[75px]">
            <section className="container mx-auto py-8">
                <div className="flex gap-6">
                    <div className="flex-1">
                        <div className="relative rounded-[32px] h-[656px] w-full overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <Image
                                    src="/images/mock/mock_signup.png"
                                    alt="Sign up banner"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full flex items-center justify-center z-10">
                                <p className="text-[32px] md:text-[60px] text-white font-heading font-bold leading-tight text-center">
                                    /Stary your day/
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight text-center">Register</h2>
                        <form className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">First Name</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Last Name</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Username</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Enter username"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Email Address</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Confirm Email</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Re-Enter Email Address"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Password</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Confirm Password</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Re-Enter Password"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                className="mt-2 h-[51px] px-8 cursor-pointer font-semibold shadow-lg shadow-black/20"
                                onClick={submit}
                            >
                                Register Now
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}