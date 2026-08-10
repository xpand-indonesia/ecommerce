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
        <main className="pt-[75px]">
            <ProductDetailSectionView />
            <ProductDetailBlendSectionView />
            <ProductDetailBrewProcessSectionView />
            <ProductDetailFAQSectionView />
            <ProductDetailReviewSectionView />
            <ProductDetailRecommendationSectionView />
        </main>
    );
}