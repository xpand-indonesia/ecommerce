import { ProductDetailSectionView } from "@/app/features/product-detail";
import { ProductDetailBlendSectionView } from "@/app/features/product-detail/views/product-detail-blend-section-view";
import { ProductDetailBrewProcessSectionView } from "@/app/features/product-detail/views/product-detail-brew-process-section-view";
import { ProductDetailFAQSectionView } from "@/app/features/product-detail/views/product-detail-faq-section-view";

export default function ProductDetailPage() {
    return (
        <main className="mt-[75px] pt-10">
            <ProductDetailSectionView className="mb-10" />
            <ProductDetailBlendSectionView />
            <ProductDetailBrewProcessSectionView />
            <ProductDetailFAQSectionView />
        </main>
    );
}