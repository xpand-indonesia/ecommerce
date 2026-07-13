'use client';

import { Button } from "@/components/ui/button";
import { InputCounter } from "@/components/ui/form/field/input-counter";
import { formatNumber } from "@/lib/utils";
import { useState } from "react";

export const ProductDetailCta = () => {
    const [quantity, setQuantity] = useState<number | undefined>(1);

    return (
        <div className="flex gap-4">
            <InputCounter className="h-14 max-w-[200px]" value={quantity} onChange={setQuantity} />
            <Button className="h-14 grow">
                ADD TO CART • {formatNumber(60000)}
            </Button>
        </div>
    );
};