import { ContentTitle } from '@/components/ui/content-title';
import { ShippingAddressCrud } from '@/features/shipping-address';

export default function ProfileShippingAddressPage() {
    return (
        <>
            <ContentTitle className="hidden lg:block">
                Shipping Address
            </ContentTitle>
            <ShippingAddressCrud />
        </>
    );
}
