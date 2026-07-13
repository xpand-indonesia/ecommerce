'use client';

import { CoffeeBean, CoffeeCup } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { InputCounter } from "@/components/ui/form/field/input-counter";
import { formatNumber } from "@/lib/utils";
import { useState } from "react";

export const ProductDetailCta = () => {
    const [quantity, setQuantity] = useState<number | undefined>(1);

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <InputCounter className="h-14 max-w-[200px]" value={quantity} onChange={setQuantity} />
                <Button className="h-14 grow">
                    ADD TO CART • {formatNumber(60000)}
                </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                    <CoffeeBean />
                    Roasted to Order
                </div>
                <div className="flex items-center gap-1.5">
                    <CoffeeCup className="size-3.5" />
                    Roasted to Order
                </div>
            </div>
        </div>
    );
};