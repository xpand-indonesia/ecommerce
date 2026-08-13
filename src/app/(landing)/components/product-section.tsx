import { ProductItem } from '@/components/product-item';
import { Button } from '@/components/ui/button';

export default function ProductSection() {
    return (
        <section
            id="catalog"
            className="container mx-auto bg-white py-8 lg:py-24 px-4 lg:px-[76px] flex flex-col gap-7"
        >
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 justify-between">
                    <h2 className="font-heading text-3xl md:text-5xl text-gray-800 leading-tight">
                        Optimise for your needs
                    </h2>
                    <Button
                        variant="outline"
                        className="min-w-[169px] hidden lg:inline-flex"
                    >
                        See All
                    </Button>
                </div>
                <p className="text-sm lg:text-base text-gray-500">
                    For best results, commit to 90 days. If you're not
                    satisfied, our 30-day risk-free guarantee lets you return it
                    - no questions asked
                </p>
                <Button variant="outline" className="flex lg:hidden h-[35px]">
                    See All
                </Button>
            </div>
            <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 lg:w-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <ProductItem
                    id="1"
                    image="mock_product_1.png"
                    name="Funki Mushroom Coffee"
                    price={60000}
                    discount={0}
                    stock={1000}
                    isBestSeller={true}
                    className="min-w-[90.962099125%] w-[90.962099125%] lg:min-w-auto lg:w-auto"
                />
                <ProductItem
                    id="1"
                    image="mock_product_2.png"
                    name="Organic Chai Latte pack"
                    price={75000}
                    discount={7000}
                    stock={1000}
                    className="min-w-[90.962099125%] w-[90.962099125%] lg:min-w-auto lg:w-auto"
                />
                <ProductItem
                    id="1"
                    image="mock_product_3.png"
                    name="Vanilla Hazelnut Brew pack"
                    price={70000}
                    discount={0}
                    stock={0}
                    className="min-w-[90.962099125%] w-[90.962099125%] lg:min-w-auto lg:w-auto"
                />
            </div>
        </section>
    );
}
