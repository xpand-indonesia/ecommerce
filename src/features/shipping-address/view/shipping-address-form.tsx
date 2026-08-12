import { Label } from '@/components/ui/form/label';
import { Input } from '@/components/ui/form/field/input';
import { Button } from '@/components/ui/button';
import { Address } from '../types/shipping-address-type';

export function ShippingAddressForm({
    address,
    onCancel,
    onSubmit,
}: {
    address?: Address;
    onCancel?: () => void;
    onSubmit?: (data: Address) => void;
}) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Email Address</Label>
                    <Input
                        type="text"
                        placeholder="Email Address (Optional)"
                        className="border-gray-200"
                        value={address?.email ?? undefined}
                        onChange={() => {}}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Full Name</Label>
                    <Input
                        type="text"
                        placeholder="Enter Full Name"
                        className="border-gray-200"
                        value={address?.name ?? undefined}
                        onChange={() => {}}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Phone Number</Label>
                    <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="border-gray-200"
                        value={address?.phone ?? undefined}
                        onChange={() => {}}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Country</Label>
                    <Input
                        type="text"
                        placeholder="Choose Country"
                        className="border-gray-200"
                        onChange={() => {}}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Cirty and Sub-District</Label>
                    <Input
                        type="text"
                        placeholder="Enter City and Sub-District"
                        className="border-gray-200"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Address</Label>
                    <Input
                        type="text"
                        placeholder="Enter Detail Address"
                        className="border-gray-200"
                        value={address?.address ?? undefined}
                        onChange={() => {}}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button onClick={onCancel} variant="outline" className="flex-1">
                    Cancel
                </Button>
                <Button onClick={onCancel} className="flex-1">
                    Save
                </Button>
            </div>
        </div>
    );
}
