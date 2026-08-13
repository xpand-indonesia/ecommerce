import { ArrowRight } from '@/components/icons/arrow-right';
import { BagCross } from '@/components/icons/bag-cross';
import { Copy } from '@/components/icons/copy';
import { DocumentCopy } from '@/components/icons/document-copy';
import { HeaderProp } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { formatNumber } from '@/lib/utils';

export default function OrderDetailPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="flex flex-col gap-6 header-safe max-w-[754px] py-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="font-heading text-4xl font-bold text-gray-800">
                            My Order
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="text-lg text-gray-800 font-bold">
                                #ID T3CH4F00B
                            </div>
                            <Copy className="size-6" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-gray-800">Status</div>
                        <Badge variant="info" appearance="light" size="sm">
                            On Process
                        </Badge>
                    </div>
                    <div className="flex items-center justify-between text-gray-800">
                        <div>Tanggal Pemesanan</div>
                        <div>29 Sep 2025</div>
                    </div>
                    <div className="flex items-center justify-between text-gray-800">
                        <div>Estimasi Pengiriman</div>
                        <div>02 Oct 2025</div>
                    </div>
                    <div className="flex items-center justify-between text-gray-800">
                        <div>Total Pembayaran</div>
                        <div className="flex items-center gap-1 font-bold">
                            {formatNumber(30000, { currency: 'IDR' })}
                            <DocumentCopy className="size-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div className="text-gray-800 text-xl font-bold">
                                Track Shipment
                            </div>
                            <div className="text-gray-500">
                                POS IND 908343: 25LG
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="text-gray-500">
                                Current Shipping
                            </div>
                            <div className="text-gray-800">
                                Paket keluar dari Cab. Kota Tangerang
                            </div>
                        </div>
                    </div>
                    <Separator className="text-gray-300" dashed />
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="rounded-full border border-gray-300 size-5"></div>
                            <div className="space-y-1 text-sm text-gray-800">
                                <div>2025 Sep 30, 17:30</div>
                                <div>
                                    Accepted at Post Office • Paket Diterima di
                                    Cab. Kota Tangerang
                                </div>
                            </div>
                        </div>
                        <div className="w-[10px] border-r border-gray-300 h-8" />
                        <div className="flex items-center gap-2">
                            <div className="rounded-full border border-gray-300 size-5"></div>
                            <div className="space-y-1 text-sm text-gray-800">
                                <div>2025 Sep 30, 19:27</div>
                                <div>
                                    On Shipping • Paket Diproses di Cab. Kota
                                    Tangerang
                                </div>
                            </div>
                        </div>
                        <div className="w-[10px] border-r border-gray-300 h-8" />
                        <div className="flex items-center gap-2">
                            <div className="rounded-full border border-gray-300 size-5"></div>
                            <div className="space-y-1 text-sm text-gray-800">
                                <div>2025 Sep 30, 19:27</div>
                                <div>
                                    On Shipping • Paket keluar dari Cab. Kota
                                    Tangerang
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-[65px] bg-[linear-gradient(180deg,_transparent_0%,_#fafafa_100%)]">
                        View All
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="font-heading font-bold text-2xl text-gray-800">
                        Order Summary
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
                        <div className="flex gap-2">
                            <div className="size-[64px] bg-[#f7f7f7] rounded-[10.24px]"></div>
                            <div>
                                <div>Funki Mushroom Coffee</div>
                                <div className="text-sm text-gray-800">
                                    27oz - Red Bean
                                </div>
                                <div className="text-xs text-gray-500">
                                    Note : Please mix the flavour with matcha
                                    and espresso
                                </div>
                                <div className="text-sm text-gray-800">
                                    {formatNumber(30000)} x2
                                </div>
                            </div>
                        </div>
                        <Separator className="text-gray-300" dashed />
                        <div className="space-y-2 text-gray-800">
                            <div className="flex items-center justify-between">
                                <div>Subtotal • 2 Items</div>
                                <div>
                                    {formatNumber(30000, { currency: 'IDR' })}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>Shipping Cost • 1,2kg</div>
                                <div>
                                    {formatNumber(10000, { currency: 'IDR' })}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>Shipping Discount</div>
                                <div>
                                    {formatNumber(-10000, { currency: 'IDR' })}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>Discount</div>
                                <div>
                                    {formatNumber(-20000, { currency: 'IDR' })}
                                </div>
                            </div>
                        </div>
                        <Separator className="text-gray-300" dashed />
                        <div className="text-gray-800 flex items-center justify-between">
                            <div className="text-sm">Total Payment</div>
                            <div className="font-bold">
                                {formatNumber(30000, { currency: 'IDR' })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="font-heading font-bold text-2xl">
                        Detail Order
                    </div>
                    <div className="flex flex-col gap-4 bg-gray-50 rounded-2xl p-4 text-sm text-gray-800">
                        <div className="space-y-1">
                            <div>Email</div>
                            <div>ricksep28@gmail.com</div>
                        </div>
                        <div className="space-y-1">
                            <div>Shipping Method</div>
                            <div>POS IND 90843</div>
                        </div>
                        <div className="space-y-1">
                            <div>Address Receiver</div>
                            <div>
                                Ricky Septian
                                <br />
                                +6285864001103
                                <br />
                                Jl. Jakarta No 28, Kota Bandung, Jawab Barat
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-2">
                    <div className="flex items-center justify-center bg-[#F4F1F1] rounded-3xl size-[38px] shadow-[0_0_8.4px_rgba(0,0,0,0.15)]">
                        <BagCross className="size-5 text-gray-800" />
                    </div>
                    <div className="flex-1 space-y-1 text-gray-800">
                        <div>Is there an issue with your product?</div>
                        <div className="text-sm">
                            Send back your product for an exchange or refund
                        </div>
                    </div>
                    <div className="text-primary flex items-center gap-2">
                        Return Product
                        <ArrowRight className="size-4" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-primary h-[51px] w-[161px] flex items-center justify-center cursor-pointer">
                        Download Recipt
                    </div>
                    <Button>Continue Shopping</Button>
                </div>
            </Container>
        </>
    );
}
