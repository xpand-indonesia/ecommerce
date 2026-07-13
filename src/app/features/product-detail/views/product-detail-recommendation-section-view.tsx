import { ProductItem2 } from "@/components/product-item-2";
import Container from "@/components/ui/container";

interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    is_best_seller: boolean;
};

const PRODUCTS: Product[] = [
    {
        id: "1",
        image: "mock_product_1.png",
        name: "Funki Mushroom Coffee",
        price: 60000,
        discount: 0,
        stock: 1000,
        is_best_seller: true
    },
    {
        id: "2",
        image: "mock_product_2.png",
        name: "Organic Chai Latte pack",
        price: 75000,
        discount: 7000,
        stock: 0,
        is_best_seller: false
    },
    {
        id: "3",
        image: "mock_product_3.png",
        name: "Vanilla Hazelnut Brew pack",
        price: 70000,
        discount: 0,
        stock: 1000,
        is_best_seller: false
    },
    {
        id: "4",
        image: "mock_product_3.png",
        name: "Vanilla Hazelnut Brew pack",
        price: 70000,
        discount: 0,
        stock: 1000,
        is_best_seller: false
    }
];

export const ProductDetailRecommendationSectionView = () => {
    return (
        <section className="py-10">
            <Container className="space-y-8">
                <h2 className="text-4xl font-bold text-center">Similar Taste For You</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}