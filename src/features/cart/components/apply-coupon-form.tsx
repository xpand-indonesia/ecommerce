import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/field/input';

export function ApplyCouponForm() {
    return (
        <div className="p-4 bg-gray-100 rounded-[16px] flex flex-col gap-2">
            <div className="font-heading text-base font-bold lg:text-xl lg:font-normal">
                Coupon Code
            </div>
            <div className="flex items-center gap-2">
                <Input placeholder="Coupon or Giftcard Code" />
                <Button className="px-[24.5px] lg:px-[30.5px]">Apply</Button>
            </div>
        </div>
    );
}
