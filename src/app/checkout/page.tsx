import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ContentTitle } from '@/components/ui/content-title';
import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Label } from '@/components/ui/form/label';
import { ApplyCouponForm } from '@/features/cart';
import {
    BillingShippingForm,
    CheckoutSummary,
    SelectPaymentMethod,
    SelectShippingMethod,
} from '@/features/checkout';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

export default function CheckoutPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-4 header-safe-4 px-4 lg:py-8 lg:py-12 lg:header-safe-8 lg:px-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="pb-4 gap-4 lg:flex-1 lg:pr-6 lg:mr-6 lg:border-r lg:border-gray-300 flex flex-col lg:gap-6">
                        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between gap-4">
                            <ContentTitle>Billing & Shipping</ContentTitle>
                            <Button
                                className="px-4 h-[35px] lg:h-[51px]"
                                variant="outline"
                            >
                                Login Now
                            </Button>
                        </div>
                        <BillingShippingForm />
                    </div>
                    <div className="lg:w-[558px] flex flex-col gap-4 lg:gap-6">
                        <ContentTitle>Your Order</ContentTitle>
                        <div className="flex flex-col gap-2 lg:gap-4">
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
