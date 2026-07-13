import {
    ProductDetailSectionView,
    ProductDetailBlendSectionView,
    ProductDetailBrewProcessSectionView,
    ProductDetailFAQSectionView,
    ProductDetailReviewSectionView,
    ProductDetailRecommendationSectionView
} from "@/app/features/product-detail";

export default function ProductDetailPage() {
    return (
        <main className="mt-[75px] pt-10">
            <ProductDetailSectionView className="mb-10" />
            <ProductDetailBlendSectionView />
            <ProductDetailBrewProcessSectionView />
            <ProductDetailFAQSectionView />
            <ProductDetailReviewSectionView />
            <ProductDetailRecommendationSectionView />
        </main>
    );
}