'use client';

import { useState } from "react";
import { CircleInfo } from "@/components/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/form/field/select";
import { GRINDS } from "../../constants/product-grind-styles";

export const ProductDetailGrindSelection = () => {
    const [grind, setGrind] = useState<string | null>("1");

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-gray-800">Grind</span>
                <div className="flex items-center text-gray-500 gap-1">
                    <span className="text-xs">Whole bean</span>
                    <CircleInfo />
                </div>
            </div>
            <Select value={grind ?? ''} onValueChange={setGrind}>
                <SelectTrigger className="h-14">
                    <SelectValue placeholder="Select grind" />
                </SelectTrigger>
                <SelectContent>
                    {GRINDS.map((grind) => (
                        <SelectItem value={grind.id} key={`grind-option-${grind.id}`}>
                            {grind.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};