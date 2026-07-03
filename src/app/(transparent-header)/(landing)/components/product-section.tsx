import { ProductItem } from "@/components/product-item";
import { Button } from "@/components/ui/button";

export default function ProductSection() {
    return (
        <section id="catalog" className="container mx-auto bg-white py-16 md:py-24 px-6 lg:px-[76px] flex flex-col gap-8 md:gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 justify-between">
                    <h2 className="font-heading text-3xl md:text-5xl text-gray-800 leading-tight">
                        Optimise for your needs
                    </h2>
                    <Button variant="outline" className="min-w-[169px]">
                        See All
                    </Button>
                </div>
                <p className="text-base text-gray-500">
                    For best results, commit to 90 days. If you're not satisfied, our 30-day risk-free guarantee lets you return it - no questions asked
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
                <ProductItem
                    image="mock_product_1.png"
                    name="Funki Mushroom Coffee"
                    price={60000}
                    discount={0}
                    stock={1000}
                    isBestSeller={true}
                />
                <ProductItem
                    image="mock_product_2.png"
                    name="Organic Chai Latte pack"
                    price={75000}
                    discount={7000}
                    stock={1000}
                />
                <ProductItem
                    image="mock_product_3.png"
                    name="Vanilla Hazelnut Brew pack"
                    price={70000}
                    discount={0}
                    stock={0}
                />
            </div>
        </section>
    );
}