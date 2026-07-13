import { ProductBundleItem } from "@/components/shared/product-budle-item";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";

export const ProductDetailBundle = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-bold text-gray-800">Bundle 2 Bags & Save 10%</span>
                    <span className="text-xs text-gray-500">No Promo Code Needed</span>
                </div>
                <div className="bg-gray-50 rounded-4xl p-4 space-y-6">
                    <ProductBundleItem
                        name="Funki Mushroom Coffee"
                        description="Persimon, Cocoa Nib, Nougat"
                        price={75000}
                        discount={15000}
                    />
                    <ProductBundleItem
                        name="Funki Mushroom Coffee"
                        description="Persimon, Cocoa Nib, Nougat"
                        price={75000}
                        discount={15000}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 text-gray-800">
                <div className="font-heading text-xl font-bold">Total</div>
                <div className="flex flex-col items-end gap-1">
                    <div className="text-xs">YOU SAVE {formatNumber(80000, { currency: "IDR" })}</div>
                    <div className="flex items-center gap-1">
                        <div className="text-[10px] text-gray-500 line-through">{formatNumber(200000, { currency: "IDR" })}</div>
                        <div className="text-xl font-bold">{formatNumber(120000, { currency: "IDR" })}</div>
                    </div>
                </div>
            </div>
            <Button variant="outline" className="w-full">ADD TO CART & SAVE 10%</Button>
        </div>
    );
};