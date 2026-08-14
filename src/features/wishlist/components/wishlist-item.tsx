import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';

export function WishlistItem() {
    return (
        <div className="border border-gray-300 p-4 flex gap-2 rounded-2xl">
            <div className="size-[64px] rounded-[10.24px] bg-gray-bg"></div>
            <div className="flex-1">
                <div>
                    <div className="leading-[1.1875]">
                        Funki Mushroom Coffee
                    </div>
                    <div className="text-gray-800 text-sm leading-[1.214285714]">
                        27oz - Red Bean
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div>{formatNumber(30000, { currency: 'IDR' })}</div>
                    <Button variant="outline" className="h-[33px] px-4">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
