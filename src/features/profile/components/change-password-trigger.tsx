import { Button } from '@/components/ui/button';

export function ChangePasswordTrigger({ onChange }: { onChange?: () => void }) {
    return (
        <div className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center justify-between">
            <div className="font-heading text-lg font-bold text-gray-800">
                Change Password
            </div>
            <Button
                onClick={onChange}
                variant="outline"
                className="h-[33px] w-[131px]"
            >
                Change
            </Button>
        </div>
    );
}
