'use client';

import { Minus, Plus } from '@/components/icons';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ReactNode, useState } from 'react';

export function FilterItemCollapsible({
    title,
    children,
}: {
    title?: string;
    children?: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="py-4 flex flex-col gap-4 border-b border-gray-200"
        >
            <CollapsibleTrigger className="w-full flex items-center justify-between text-gray-800 cursor-pointer">
                <span className="font-heading text-xl leading-[1.35]">
                    {title}
                </span>
                {isOpen ? (
                    <Minus className="size-6" />
                ) : (
                    <Plus className="size-6" />
                )}
            </CollapsibleTrigger>
            <CollapsibleContent className="in-data-[sidebar-collapsed]:hidden">
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}
