'use client';

import { Separator } from "@/components/ui/separator";
import { ProductDetailDescription } from "../components/product-detail-description";
import { ProductDetailSizeSelection } from "../components/product-detail-size-selection";
import { ProductDetailGrindSelection } from "../components/product-detail-grind-selection";



export const ProductDetailFull = () => {

    return (
        <div className="space-y-6">
            <ProductDetailDescription />
            <Separator />
            <ProductDetailSizeSelection />
            <Separator />
            <ProductDetailGrindSelection />
            <Separator />
        </div>
    );
};