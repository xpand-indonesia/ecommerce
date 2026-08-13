import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

export function OrderItem() {
    return (
        <Link
            href={`/orders/${1}`}
            className="border border-gray-300 p-4 flex flex-col gap-4 rounded-2xl hover:border-primary transition-colors"
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-800">ID T3CH4F00B</div>
                    <Badge size="sm" variant="warning" appearance="light">
                        Pending
                    </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">29 Sep 2025</div>
                    <div className="text-gray-800">
                        Accepted at Post Office, Cab. Tangerang
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="size-16 bg-[#F7F7F7] rounded-[10.24px]"></div>
                <div className="flex-1 space-y-1">
                    <div>
                        <div>Funki Mushroom Coffee</div>
                        <div className="text-sm text-gray-800">
                            27oz - Red Bean
                        </div>
                    </div>
                    <div className="text-xs text-gray-500">
                        Note : Please mix the flavour with matcha and espresso
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-800">
                        <div>{formatNumber(30000, { currency: 'IDR' })} x2</div>
                        <div>{formatNumber(60000, { currency: 'IDR' })}</div>
                    </div>
                </div>
            </div>
            <Separator className="text-gray-300" dashed />
            <div className="flex items-center justify-between text-sm">
                <div className="text-gray-500">Total 1 Item</div>
                <div className="text-gray-800">
                    {formatNumber(60000, { currency: 'IDR' })}
                </div>
            </div>
        </Link>
    );
}
