import {
    ProductDetailBlendSectionView,
    ProductDetailBrewProcessSectionView,
    ProductDetailFAQSectionView,
    ProductDetailRecommendationSectionView,
    ProductDetailReviewSectionView,
    ProductDetailSectionView,
} from '@/features/product-detail';

export default function ProductDetailPage() {
    return (
        <div className="header-safe-0">
            <ProductDetailSectionView />
            <ProductDetailBlendSectionView />
            <ProductDetailBrewProcessSectionView />
            <ProductDetailFAQSectionView />
            <ProductDetailReviewSectionView />
            <ProductDetailRecommendationSectionView />
        </div>
    );
}
