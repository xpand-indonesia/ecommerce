import { Setting } from '@/components/icons/setting';
import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ContentTitle } from '@/components/ui/content-title';
import { OrderList } from '@/features/order';
import Link from 'next/link';

export default function MyOrdersPage() {
    return (
        <>
            <HeaderProp style="default" />
            <div className="header-safe py-8">
                <div className="max-w-[754px] mx-auto flex flex-col gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <ContentTitle>Hi, Ricky Septian</ContentTitle>
                            <Link href="/profile">
                                <Button
                                    variant="outline"
                                    className="h-10 gap-2 px-4"
                                >
                                    <Setting className="size-6" />
                                    Settings
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-white border border-neutral-300 p-1 rounded-full flex items-center">
                            <div className="flex-1 h-11 flex items-center justify-center text-white rounded-full bg-primary">
                                My Orders
                            </div>
                            <div className="flex-1 h-11 flex items-center justify-center text-gray-500">
                                Wishlist
                            </div>
                        </div>
                    </div>
                    <OrderList />
                </div>
            </div>
        </>
    );
}
