'use client';

import { Plus } from '@/components/icons';
import { XCircle } from '@/components/icons/x-circle';
import { Badge } from '@/components/ui/badge';
import { InputCounter } from '@/components/ui/form/field/input-counter';
import { formatNumber } from '@/lib/utils';
import { useState } from 'react';
import { AddCartItemNoteDialog } from './add-cart-item-note-dialog';

export function CartFlatList({ items = [] }: { items?: any[] }) {
    const [isNoteOpen, setIsNoteOpen] = useState(false);

    const handleEditNote = () => {
        setIsNoteOpen(true);
    };

    return (
        <>
            <div className="flex flex-col gap-4 lg:gap-6">
                {items.map((_, idx) => (
                    <div
                        key={`cart-item-${idx}`}
                        className="pb-4 border-b border-gray-300 lg:pb-6"
                    >
                        <CartFlatListItem onEditNote={handleEditNote} />
                    </div>
                ))}
            </div>
            <AddCartItemNoteDialog
                open={isNoteOpen}
                onOpenChange={setIsNoteOpen}
            />
        </>
    );
}

export function CartFlatListItem({ onEditNote }: { onEditNote?: () => void }) {
    return (
        <div className="flex gap-2 lg:gap-4">
            <div className="size-[100px] bg-[#F7F7F7] rounded-[16px] relative">
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[20.833333333%] lg:-translate-y-[28.125%] size-6 lg:size-8 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer">
                    <XCircle className="text-primary size-3 lg:size-4" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                <div>
                    <div>Funki Mushroom Coffee</div>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="line-through text-gray-500">
                            {formatNumber(60000, {
                                currency: 'IDR',
                            })}
                        </div>
                        <div className="text-gray-800">
                            {formatNumber(60000, {
                                currency: 'IDR',
                            })}
                        </div>
                        <Badge variant="danger" className="uppercase">
                            Off 20%
                        </Badge>
                    </div>
                    <div className="text-sm text-gray-800 mt-1">
                        27oz - Red Bean
                    </div>
                </div>
                <div>
                    <InputCounter
                        className="h-[40px] max-w-[145px] lg:h-[33px] lg:max-w-[160px]"
                        value={2}
                    />
                </div>
                <div
                    onClick={onEditNote}
                    className="text-primary text-sm flex items-center gap-2 py-2 cursor-pointer"
                >
                    <Plus className="size-4" />
                    <span className="leading-[1.214285714]">Add Note</span>
                </div>
            </div>
        </div>
    );
}
