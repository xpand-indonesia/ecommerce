import { Setting } from '@/components/icons/setting';
import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ContentTitle } from '@/components/ui/content-title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OrderList } from '@/features/order';
import { WishlistList } from '@/features/wishlist';
import Link from 'next/link';

export default function MyOrdersPage() {
    return (
        <>
            <HeaderProp style="default" />
            <div className="header-safe py-8">
                <div className="max-w-[754px] mx-auto space-y-4">
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
                    <Tabs>
                        <Tabs defaultValue="orders">
                            <TabsList>
                                <TabsTrigger value="orders">
                                    My Orders
                                </TabsTrigger>
                                <TabsTrigger value="wishlist">
                                    Wishlist
                                </TabsTrigger>
                            </TabsList>
                            <div>
                                <TabsContent value="orders" className="pt-6">
                                    <OrderList orders={[{}, {}]} />
                                </TabsContent>
                                <TabsContent
                                    value="wishlist"
                                    className="pt-[36.5px]"
                                >
                                    <WishlistList />
                                </TabsContent>
                            </div>
                        </Tabs>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
