import { Button } from '@/components/ui/button';
import DialogContent, {
    Dialog,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export function AddCartItemNoteDialog({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange} modal={true}>
            <DialogContent
                className={cn(
                    'w-full h-full rounded-b-none lg:max-w-[417px] lg:h-auto lg:rounded-b-2xl'
                )}
            >
                <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                </DialogHeader>
                <div className="flex-1 flex flex-col gap-4 px-4 py-2 lg:py-4 lg:pt-4 lg:px-6 lg:pb-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="space-y-[6px]">
                                <div className="text-sm text-gray-700 leading-[17px]">
                                    Note Description
                                </div>
                                <textarea
                                    className="py-[10px] px-[14px] border border-gray-300 rounded-lg w-full h-[157px] resize-none"
                                    placeholder="Add Note regarding the product"
                                ></textarea>
                            </div>
                        </div>
                        <Button className="w-full">Add Note</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
