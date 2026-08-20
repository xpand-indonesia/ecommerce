import { HeaderProp } from '@/components/layout';
import { ProductItem } from '@/components/product-item';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { ApplyCouponForm, CartFlatList, CartSummary } from '@/features/cart';
import Link from 'next/link';

export default function CartPage() {
    const items = Array.from({ length: 2 });

    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-4 header-safe-4 px-4 lg:py-8 lg:header-safe-8 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className="lg:flex-1 lg:pr-6 lg:mr-6 lg:border-r lg:border-gray-300 flex flex-col gap-4 lg:gap-6">
                        <div className="flex items-center justify-between">
                            <ContentTitle>Cart</ContentTitle>
                            <div className="text-primary text-sm lg:text-base">
                                {items.length} Items
                            </div>
                        </div>
                        <CartFlatList items={items} />
                        <ContentTitle className="hidden lg:block">
                            Recommendation For You
                        </ContentTitle>
                        <div className="hidden lg:grid grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <ProductItem
                                    key={`recommendation-product-${idx}`}
                                    id="1"
                                    image="mock_product_1.png"
                                    name="Funki Mushroom Coffee"
                                    price={60000}
                                    discount={0}
                                    stock={1000}
                                    isBestSeller={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-[443px] flex flex-col gap-4 lg:gap-6">
                        <ContentTitle>Summary</ContentTitle>
                        <div className="flex flex-col gap-4">
                            <ApplyCouponForm />
                            <CartSummary />
                        </div>
                        <Link href="/checkout">
                            <Button className="w-full">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}
