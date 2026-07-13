import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import BrewProcessSection from "./components/brew-process-section";
import { ProductDetailSectionView } from "@/app/features/product-detail";

export default function ProductDetailPage() {
    return (
        <main className="mt-[75px] pt-10 space-y-10">
            <ProductDetailSectionView />
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