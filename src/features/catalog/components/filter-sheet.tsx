import { Sheet, SheetBody, SheetContent } from '@/components/ui/sheet';
import { FilterForm } from './filter-form';

export function FilterSheet({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                className="w-[327px] start-auto h-auto p-0 gap-4"
                side="left"
                close={false}
            >
                <SheetBody className="grow p-0 flex flex-col gap-4">
                    <div className="grow">
                        <FilterForm />
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    );
}
