'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form/field/input";
import { Label } from "@/components/ui/form/label";
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
                                    <Label>First Name</Label>
                                    <Input type="text" placeholder="John" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label>Last Name</Label>
                                    <Input type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-2">
                                    <Label>Username</Label>
                                    <Input type="text" placeholder="Enter username" />
                                    <span className="text-xs text-gray-500">
                                        Only lower case letter (a-z) and numbers (0-9) are allowed
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label>Email Address</Label>
                                    <Input type="text" placeholder="Enter Email Address" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label>Confirm Email</Label>
                                    <Input type="text" placeholder="Re-Enter Email Address" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label>Password</Label>
                                    <Input type="text" placeholder="Enter Password" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label>Confirm Password</Label>
                                    <Input type="text" placeholder="Re-Enter Password" />
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