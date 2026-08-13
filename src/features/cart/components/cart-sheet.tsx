import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetBody,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

export function CartSheet({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="sm:w-[526px] sm:max-w-none start-auto h-auto p-0">
                <SheetHeader className="py-4 px-6">
                    <SheetTitle className="flex items-center gap-2.5">
                        Track Shipment
                    </SheetTitle>
                </SheetHeader>
                <SheetBody className="p-0 px-6 flex flex-col gap-4">
                    <div className="space-y-2">
                        <div className="text-gray-500">
                            POS IND 908343: 25LG
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="text-gray-500">
                                Current Shipping
                            </div>
                            <div className="text-gray-800">
                                Paket keluar dari Cab. Kota Tangerang
                            </div>
                        </div>
                    </div>
                    <Separator className="bg-gray-300" />
                </SheetBody>
            </SheetContent>
        </Sheet>
    );
}
