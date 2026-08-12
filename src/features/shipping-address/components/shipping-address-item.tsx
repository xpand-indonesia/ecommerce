import { cn } from '@/lib/utils';
import { TickCircleOutline } from '@/components/icons/tick-circle-outline';
import { Address } from '../types/shipping-address-type';

interface ShippingAddressItemProps {
    address: Address;
    onEdit?: () => void;
    onDelete?: () => void;
}

export function ShippingAddressItem({
    address,
    onEdit,
    onDelete,
}: ShippingAddressItemProps) {
    return (
        <div
            className={cn(
                'bg-white border rounded-2xl p-4 flex flex-col gap-2',
                address.isDefault ? 'border-primary' : 'border-gray-300'
            )}
        >
            <div className="flex items-start justify-between">
                <div className="font-heading font-bold text-lg text-gray-800">
                    {address.name}
                </div>
                <TickCircleOutline
                    className={cn(
                        'size-6',
                        address.isDefault ? 'text-primary' : 'text-gray-500'
                    )}
                />
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-800">
                <span>{address.phone}</span>
                <span>•</span>
                <span>{address.email}</span>
            </div>
            <div>{address.address}</div>
            <div className="flex items-center justify-between">
                <div>
                    {!address.isDefault && (
                        <div
                            onClick={onDelete}
                            className="text-sm text-danger py-2 pr-2 cursor-pointer"
                        >
                            Remove
                        </div>
                    )}
                </div>
                <div>
                    <div
                        onClick={onEdit}
                        className="text-sm text-primary py-2 pl-2 cursor-pointer"
                    >
                        Change
                    </div>
                </div>
            </div>
        </div>
    );
}
