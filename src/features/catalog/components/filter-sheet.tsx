import {
    Sheet,
    SheetBody,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

export function FilterSheet({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-none start-auto h-auto p-0 gap-4">
                <SheetHeader className="">
                    <SheetTitle className="flex items-center gap-2.5">
                        Filters
                    </SheetTitle>
                </SheetHeader>
                <SheetBody className="grow p-0 flex flex-col gap-4">
                    <div className="grow flex flex-col justify-between">
                        <div className="flex-1 flex gap-4 px-6">Top</div>
                        <div className="bg-gray-50 shadow-[0_-4px_18px_0_rgba(0,0,0,0.1)] p-4 space-y-2.5">
                            Bottom
                        </div>
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    );
}
