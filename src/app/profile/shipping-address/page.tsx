import { Plus } from '@/components/icons';
import { TickCircleOutline } from '@/components/icons/tick-circle-outline';
import { Button } from '@/components/ui/button';
import { ContentTitle } from '@/components/ui/content-title';
import { cn } from '@/lib/utils';

interface Address {
    name: string;
    phone: string;
    email: string;
    address: string;
    default: boolean;
}

const ADDRESSES: Address[] = [
    {
        name: 'Ricky Septian',
        phone: '085864001103',
        email: 'ricksep@gmail.com',
        address: 'Jl.Melati No.28, Cimahi, Jawa Barat, 40512',
        default: true,
    },
    {
        name: 'John Snow',
        phone: '085864001105',
        email: 'jhon@gmail.com',
        address: 'Jl.Belitung No.10, Bandung, Jawa Barat, 40512',
        default: false,
    },
];

export default function ProfileShippingAddressPage() {
    return (
        <>
            <ContentTitle>Shipping Address</ContentTitle>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    {ADDRESSES.map((address, idx) => (
                        <div
                            key={`address-${idx}`}
                            className={cn(
                                'bg-white border rounded-2xl p-4 flex flex-col gap-2',
                                address.default
                                    ? 'border-primary'
                                    : 'border-gray-300'
                            )}
                        >
                            <div className="flex items-start justify-between">
                                <div className="font-heading font-bold text-lg text-gray-800">
                                    {address.name}
                                </div>
                                <TickCircleOutline
                                    className={cn(
                                        'size-6',
                                        address.default
                                            ? 'text-primary'
                                            : 'text-gray-500'
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
                                    {!address.default && (
                                        <div className="text-sm text-danger py-2 pr-2 cursor-pointer">
                                            Remove
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="text-sm text-primary py-2 pl-2 cursor-pointer">
                                        Change
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button
                        variant="outline"
                        className="h-10 gap-2 items-center"
                    >
                        <Plus className="size-6" />
                        Create New
                    </Button>
                </div>
            </div>
        </>
    );
}
