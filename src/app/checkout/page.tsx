import { formatNumber } from '@/lib/utils';
import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ApplyCouponForm } from '@/features/cart';
import {
    BillingShippingForm,
    CheckoutSummary,
    SelectPaymentMethod,
    SelectShippingMethod,
} from '@/features/checkout';
import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Label } from '@/components/ui/form/label';

export default function CheckoutPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="header-safe py-8 px-10">
                <div className="flex">
                    <div className="flex-1 pr-6 mr-6 border-r border-gray-300 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <ContentTitle>Billing & Shipping</ContentTitle>
                            <Button className="" variant="outline">
                                Login Now
                            </Button>
                        </div>
                        <BillingShippingForm />
                    </div>
                    <div className="w-[558px] flex flex-col gap-6">
                        <ContentTitle>Your Order</ContentTitle>
                        <div className="flex flex-col gap-4">
                            <ApplyCouponForm />
                            <CheckoutSummary />
                        </div>
                        <div className="py-4 border-y border-gray-300 space-y-2">
                            <div className="text-lg font-heading font-bold">
                                Payment Method
                            </div>
                            <SelectPaymentMethod />
                        </div>
                        <div className="py-4 border-y border-gray-300 space-y-2">
                            <div className="text-lg font-heading font-bold">
                                Shipping Method
                            </div>
                            <SelectShippingMethod />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label
                                htmlFor="agree"
                                className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                I have read and agree to the website terms and
                                conditions
                            </Label>
                        </div>
                        <Link href="/orders">
                            <Button className="w-full">
                                Pay Now -{' '}
                                {formatNumber(147000, { currency: 'IDR' })}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}
