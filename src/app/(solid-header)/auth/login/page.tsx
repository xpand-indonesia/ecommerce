'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/form/field/checkbox";
import { Input } from "@/components/ui/form/field/input";
import { Label } from "@/components/ui/form/label";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
    const submit = () => { }

    return (
        <main className="flex-1 w-full flex flex-co pt-[75px]">
            <section className="container mx-auto py-8">
                <div className="flex gap-6">
                    <div className="flex-1">
                        <div className="relative rounded-[32px] h-[656px] w-full overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <Image
                                    src="/images/mock/mock_signin.png"
                                    alt="Sign up banner"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full flex items-center justify-center z-10">
                                <p className="text-[32px] md:text-[60px] text-white font-heading font-bold leading-tight text-center">/Enjoy Cofee/</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className=" flex flex-col gap-8">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight text-center">Login</h2>
                            <form className="flex flex-col gap-4">
                                <div className="w-full flex flex-col gap-2">
                                    <Label>Username or Email Address</Label>
                                    <Input type="text" placeholder="olivia@untitledui.com" />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="Enter Password" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember-me" />
                                    <Label htmlFor="remember-me" className="cursor-pointer">Remember Me</Label>
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
                        <div className="border-b border-[#D5D7DA] font-medium w-full my-4"></div>
                        <div>
                            Don't have an account? <Link href="/auth/register" className="text-primary">Register Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}