import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ProductDetailPhotos } from "../components/product-detail-section/product-detail-photos";
import { ProductDetailDescription } from "../components/product-detail-section/product-detail-description";
import { ProductDetailSizeSelection } from "../components/product-detail-section/product-detail-size-selection";
import { ProductDetailGrindSelection } from "../components/product-detail-section/product-detail-grind-selection";
import { ProductDetailCta } from "../components/product-detail-section/product-detail-cta";
import { ProductDetailBundle } from "../components/product-detail-section/product-detail-bundle";
import { ProductDetailCofeeDetail } from "../components/product-detail-section/product-detail-coffee-detail";

export const ProductDetailSectionView = ({ className }: { className?: string }) => {

    return (
        <section>
            <Container className={cn("px-6 md:px-10", className)}>
                <div className="flex divide-x divide-gray-300">
                    <div className="w-[41%] pr-6">
                        <ProductDetailPhotos />
                    </div>
                    <div className="flex-1 pl-6">
                        <div className="space-y-6">
                            <ProductDetailDescription />
                            <Separator />
                            <ProductDetailSizeSelection />
                            <Separator />
                            <ProductDetailGrindSelection />
                            <Separator />
                            <ProductDetailCta />
                            <ProductDetailBundle />
                            <ProductDetailCofeeDetail />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};