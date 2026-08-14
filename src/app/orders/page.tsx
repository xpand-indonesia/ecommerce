import { Setting } from '@/components/icons/setting';
import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OrderList } from '@/features/order';
import { WishlistList } from '@/features/wishlist';
import Link from 'next/link';

export default function MyOrdersPage() {
    return (
        <>
            <HeaderProp style="default" />
            <div className="py-4 header-safe-4 lg:py-8 lg:header-safe-8">
                <Container className="px-4 lg:max-w-[754px] lg:px-0 space-y-4">
                    <div className="flex items-center justify-between">
                        <ContentTitle>Hi, Ricky Septian</ContentTitle>
                        <Link href="/profile">
                            <Button
                                variant="outline"
                                className="w-10 h-10 gap-2 px-0 lg:w-auto lg:px-4"
                            >
                                <Setting className="size-6" />
                                <span className="hidden lg:inline">
                                    Settings
                                </span>
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
                </Container>
            </div>
        </>
    );
}
