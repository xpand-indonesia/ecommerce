import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetBody,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import {
    TrackShipmentItem,
    TrackShipmentItemSeparator,
} from './track-shipment-item';

export function TrackShipmentSheet({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="sm:w-[526px] sm:max-w-none start-auto h-[87.068965517vh] p-0">
                <SheetHeader className="">
                    <SheetTitle className="flex items-center gap-2.5">
                        Track Shipment
                    </SheetTitle>
                </SheetHeader>
                <SheetBody className="p-0 px-4 lg:px-6 flex flex-col gap-4">
                    <div className="space-y-2">
                        <div className="text-gray-500">
                            POS IND 908343: 25LG
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 text-sm">
                            <div className="text-gray-500">
                                Current Shipping
                            </div>
                            <div className="text-gray-800">
                                Paket keluar dari Cab. Kota Tangerang
                            </div>
                        </div>
                    </div>
                    <Separator className="bg-gray-300" />
                    <div>
                        <TrackShipmentItem
                            date="2025 Sep 30, 17:30"
                            description="Accepted at Post Office • Paket Diterima di Cab. Kota Tangerang"
                        />
                        <TrackShipmentItemSeparator />
                        <TrackShipmentItem
                            date="2025 Sep 30, 19:27"
                            description="On Shipping • Paket Diproses di Cab. Kota Tangerang"
                        />
                        <TrackShipmentItemSeparator />
                        <TrackShipmentItem
                            date="2025 Sep 30, 19:27"
                            description="On Shipping • Paket keluar dari Cab. Kota Tangerang"
                        />
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    );
}
