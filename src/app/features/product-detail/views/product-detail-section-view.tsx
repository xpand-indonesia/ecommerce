import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ProductDetailPhotos } from "../components/product-detail-photos";
import { ProductDetailDescription } from "../components/product-detail-description";
import { ProductDetailSizeSelection } from "../components/product-detail-size-selection";
import { ProductDetailGrindSelection } from "../components/product-detail-grind-selection";

export const ProductDetailSectionView = () => {

    return (
        <section>
            <Container className="px-6 md:px-10">
                <div className="flex divide-x divide-gray-300">
                    <div className="w-[41%] pr-6">
                        <ProductDetailPhotos />
                    </div>
                    <div className="flex-1 h-[400px] pl-6">
                        <div className="space-y-6">
                            <ProductDetailDescription />
                            <Separator />
                            <ProductDetailSizeSelection />
                            <Separator />
                            <ProductDetailGrindSelection />
                            <Separator />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};