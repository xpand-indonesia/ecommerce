import { Button } from '@/components/ui/button';
import { Plus } from '@/components/icons';
import { Address } from '../types/shipping-address-type';
import { ADDRESSES } from '../constants/shipping-address';
import { ShippingAddressItem } from '../components/shipping-address-item';

export function ShippingAddressList({
    onOpenForm,
}: {
    onOpenForm?: (address?: Address) => void;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                {ADDRESSES.map((address, idx) => (
                    <ShippingAddressItem
                        key={`address-${idx}`}
                        address={address}
                        onEdit={() => onOpenForm?.(address)}
                    />
                ))}
            </div>
            <div className="flex justify-end">
                <Button
                    onClick={() => onOpenForm?.()}
                    variant="outline"
                    className="h-10 gap-2 items-center"
                >
                    <Plus className="size-6" />
                    Create New
                </Button>
            </div>
        </div>
    );
}
