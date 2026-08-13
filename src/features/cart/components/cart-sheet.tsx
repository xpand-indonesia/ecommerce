import { Button } from '@/components/ui/button';
import { InputCounter } from '@/components/ui/form/field/input-counter';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetBody,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

export function CartSheet({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="sm:w-[417px] sm:max-w-none start-auto h-auto p-0 gap-4">
                <SheetHeader className="py-4 px-6">
                    <SheetTitle className="flex items-center gap-2.5">
                        Cart (2)
                    </SheetTitle>
                </SheetHeader>
                <SheetBody className="grow p-0 flex flex-col gap-4">
                    <div className="grow flex flex-col justify-between">
                        <div className="flex-1 flex gap-4 px-6">
                            <div className="size-[100px] rounded-2xl bg-[#F7F7F7]"></div>
                            <div className="flex flex-col gap-2">
                                <div>Funki Mushroom Coffee</div>
                                <div className="space-y-1 text-sm text-gray-800">
                                    <div>
                                        {formatNumber(60000, {
                                            currency: 'IDR',
                                        })}
                                    </div>
                                    <div>27oz - Red Bean</div>
                                </div>
                                <div>
                                    <InputCounter
                                        value={2}
                                        className="h-[33px] w-[160px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 shadow-[0_-4px_18px_0_rgba(0,0,0,0.1)] p-4 space-y-2.5">
                            <div className="flex items-center justify-between text-gray-800">
                                <div className="text-xl">Subtotal</div>
                                <div>
                                    {formatNumber(180000, { currency: 'IDR' })}
                                </div>
                            </div>
                            <Separator dashed className="text-gray-300" />
                            <div className="flex items-center gap-2.5">
                                <div className="flex-1">
                                    <Link href="/cart">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => onOpenChange(false)}
                                        >
                                            View Cart
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <Link href="/checkout">
                                        <Button
                                            className="w-full"
                                            onClick={() => onOpenChange(false)}
                                        >
                                            Checkout
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    );
}
