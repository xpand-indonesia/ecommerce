import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Image from 'next/image';

export const ProductDetailBlendSectionView = () => {
    return (
        <section className="bg-gray-100 py-4 lg:py-0">
            <Container className="flex flex-col px-4 gap-4 lg:flex-row lg:px-10 lg:gap-6">
                <div className="order-2 lg:order-1 lg:flex-1 lg:py-10 flex flex-col gap-4">
                    <h2 className="font-bold text-3xl lg:text-4xl lg:leading-[1.194444444]">
                        Blend on Repeat
                    </h2>
                    <div className="flex flex-col gap-2">
                        <p className="text-gary-800 text-base lg:text-lg">
                            Summer Solstice is part of our Blend Shuffle Series,
                            a rotating selection of our Signature Blends.
                            <br />
                            <br />
                            What you'll love about it:
                        </p>
                        <ul className="list-disc text-gary-800 font-bold text-base lg:text-lg pl-5">
                            <li>15% ALL your online orders</li>
                            <li>Always roasted to order</li>
                            <li>Set your frequency down to the day</li>
                            <li>Extra savings on large bags</li>
                            <li>Skip or Cancel in 1 click (yes, really!)</li>
                        </ul>
                    </div>
                    <Button
                        variant="primary"
                        className="max-w-[173px] max-h-[40px] lg:max-w-[311px]"
                    >
                        TRY RISK FREE
                    </Button>
                </div>
                <div className="order-1 h-[450px] rounded-2xl overflow-hidden lg:order-2 lg:flex-1 relative lg:h-[541px] lg:rounded-none">
                    <Image
                        src="/images/mock/mock_promo_banner.png"
                        alt="Blend on Repeat"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            </Container>
        </section>
    );
};
