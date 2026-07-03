import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function ProductDetailPage() {
    return (
        <main className="pt-[75px]">
            <div className="container mx-auto mb-10">
                <div className="flex divide-x divide-gray-300">
                    <div className="w-[41%] pr-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-2 w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-200"></div>
                        </div>
                    </div>
                    <div className="flex-1 h-[400px] pl-6">
                        <div className="flex flex-col gap-6">
                            {/* Header Title */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h2>Funki Mushroom Coffee</h2>
                                    <span>Love</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span>Rp 60,000</span>
                                    <span>Rp 60,000</span>
                                    <span>OFF 20%</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <h3>Nectarine, Blackberry, Honeysnuckle</h3>
                                <p>
                                    Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!
                                </p>
                            </div>

                            <hr className="border-t border-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-100">
                <Container>
                    <div className="flex px-4 gap-6">
                        <div className="flex-1 py-10 flex flex-col gap-4">
                            <h2 className="font-bold text-4xl">Blend on Repeat</h2>
                            <div className="flex flex-col gap-2">
                                <p>
                                    Summer Solstice is part of our Blend Shuffle Series, a rotating selection of our Signature Blends.
                                    <br /><br />
                                    What you'll love about it:
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>15% ALL your online orders</li>
                                    <li>Always roasted to order</li>
                                    <li>Set your frequency down to the day</li>
                                    <li>Extra savings on large bags</li>
                                    <li>Skip or Cancel in 1 click (yes, really!)</li>
                                </ul>
                            </div>
                            <Button variant="primary" className="max-h-[41px] max-w-[311px]">TRY RISK FREE</Button>
                        </div>
                        <div className="flex-1 relative h-[541px]">
                            <Image
                                src="/images/mock/mock_promo_banner.png"
                                alt="Blend on Repeat"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}