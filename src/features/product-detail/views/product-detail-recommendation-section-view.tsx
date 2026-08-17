import { ProductItem2 } from '@/components/product-item-2';
import Container from '@/components/ui/container';

interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    is_best_seller: boolean;
}

const PRODUCTS: Product[] = [
    {
        id: '1',
        image: 'mock_product_1.png',
        name: 'Funki Mushroom Coffee',
        price: 60000,
        discount: 0,
        stock: 1000,
        is_best_seller: true,
    },
    {
        id: '2',
        image: 'mock_product_2.png',
        name: 'Organic Chai Latte pack',
        price: 75000,
        discount: 7000,
        stock: 0,
        is_best_seller: false,
    },
    {
        id: '3',
        image: 'mock_product_3.png',
        name: 'Vanilla Hazelnut Brew pack',
        price: 70000,
        discount: 0,
        stock: 1000,
        is_best_seller: false,
    },
    {
        id: '4',
        image: 'mock_product_3.png',
        name: 'Vanilla Hazelnut Brew pack',
        price: 70000,
        discount: 0,
        stock: 1000,
        is_best_seller: false,
    },
];

export const ProductDetailRecommendationSectionView = () => {
    return (
        <section className="py-6 lg:py-10 space-y-8">
            <Container className="lg:px-10">
                <h2 className="text-xl font-bold text-center lg:text-4xl">
                    Similar Taste For You
                </h2>
            </Container>
            <Container className="px-0 lg:px-10">
                <div className="w-full overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex gap-4 lg:grid lg:grid-cols-4 lg:gap-8">
                        <div className="pr-px lg:hidden" />
                        {PRODUCTS.map((product) => (
                            <ProductItem2
                                key={`product-${product.id}`}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                discount={product.discount}
                                stock={product.stock}
                                isBestSeller={product.is_best_seller}
                                className="min-w-[312px]"
                            />
                        ))}
                        <div className="pr-px lg:hidden" />
                    </div>
                </div>
            </Container>
        </section>
    );
};
