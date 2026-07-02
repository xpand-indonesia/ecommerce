'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignInPage() {
    const submit = () => { }

    return (
        <main className="flex-1 w-full flex flex-co pt-[75px]">
            <section className="container mx-auto py-8">
                <div className="flex gap-6">
                    <div className="flex-1">
                        <div className="relative rounded-[32px] h-[656px] w-full overflow-hidden">
                            <Image
                                src="/images/mock/mock_signin.png"
                                alt="Sign up banner"
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight text-center">Login</h2>
                        <form className="flex flex-col gap-4">
                            <div className="w-full">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Username or Email Address</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="olivia@untitledui.com"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm color-[#414651]">Password</label>
                                    <input
                                        className="w-full px-4 bg-white border border-[#E9EAEB] rounded-full h-[51px] font-body text-base outline-none focus:border-primary transition-colors text-dark"
                                        placeholder="Enter Password"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                className="mt-2 h-[51px] px-8 cursor-pointer font-semibold shadow-lg shadow-black/20"
                                onClick={submit}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}