import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { ProductDetailBundle } from '../components/product-detail-bundle';
import { ProductDetailCofeeDetail } from '../components/product-detail-coffee-detail';
import { ProductDetailCta } from '../components/product-detail-cta';
import { ProductDetailDescription } from '../components/product-detail-description';
import { ProductDetailGrindSelection } from '../components/product-detail-grind-selection';
import { ProductDetailPhotos } from '../components/product-detail-photos';
import { ProductDetailSizeSelection } from '../components/product-detail-size-selection';

export const ProductDetailSectionView = () => {
    return (
        <section>
            <Container className="px-0 py-4 lg:px-10 lg:py-10">
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 lg:divide-x lg:divide-gray-300">
                    <div className="w-full overflow-x-auto lg:w-[41%] lg:pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <ProductDetailPhotos />
                    </div>
                    <div className="px-4 lg:flex-1 lg:px-0 lg:pl-6">
                        <div className="space-y-4 lg:space-y-6">
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
