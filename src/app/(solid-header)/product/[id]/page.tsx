import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import BrewProcessSection from "./components/brew-process-section";
import { formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
    return (
        <main className="mt-[75px] pt-10">
            <section className="mb-10">
                <Container className="px-6 md:px-10">
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
                                        <h2 className="text-4xl font-bold">Funki Mushroom Coffee</h2>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500 line-through">
                                            {formatNumber(60000, { currency: 'IDR' })}
                                        </span>
                                        <span className="text-lg">
                                            {formatNumber(60000, { currency: 'IDR' })}
                                        </span>
                                        <Badge variant="danger">OFF {formatNumber(20)}%</Badge>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-heading font-bold">Nectarine, Blackberry, Honeysnuckle</h3>
                                    <p>
                                        Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!
                                    </p>
                                </div>

                                <hr className="border-t border-gray-200" />

                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="font-heading font-bold">Size</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99935 1.33317C4.33268 1.33317 1.33268 4.33317 1.33268 7.99984C1.33268 11.6665 4.33268 14.6665 7.99935 14.6665C11.666 14.6665 14.666 11.6665 14.666 7.99984C14.666 4.33317 11.666 1.33317 7.99935 1.33317Z" stroke="#252B37" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 10.6665L8 7.33317" stroke="#252B37" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00391 5.3335L7.99792 5.3335" stroke="#252B37" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-xs text-gray-500">12 oz</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1 flex flex-col items-center gap-1">
                                            <div className="w-full rounded-full bg-base-100 flex items-center justify-center font-bold text-white h-[33px]">
                                                12OZ
                                            </div>
                                            <span className="text-xs text-gray-500">12 Cups</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-1">
                                            <div className="relative w-full rounded-full bg-gray-100 flex items-center justify-center text-gray-800 h-[33px]">
                                                2LB
                                                <div className="absolute top-0 left-1/2 -translate-y-[65%] -translate-x-1/2 h-[20px] bg-white flex items-center justify-center px-2 border border-primary rounded-full text-[10px] text-gray-800">
                                                    SAVE 5%
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-500">45 Cups</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-1">
                                            <div className="relative w-full rounded-full bg-gray-100 flex items-center justify-center text-gray-800 h-[33px]">
                                                5LB
                                                <div className="absolute top-0 left-1/2 -translate-y-[65%] -translate-x-1/2 h-[20px] bg-white flex items-center justify-center px-2 border border-primary rounded-full text-[10px] text-gray-800">
                                                    SAVE 10%
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-500">117 Cups</span>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-t border-gray-200" />

                            </div>
                        </div>
                    </div>
                </Container>
            </section>
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <BrewProcessSection />
        </main>
    );
}