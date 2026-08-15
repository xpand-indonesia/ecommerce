import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';

export function BillingShippingForm() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 flex flex-col gap-2">
                    <Label>First Name</Label>
                    <Input
                        type="text"
                        placeholder="John"
                        className="border-gray-200"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label>Last Name</Label>
                    <Input
                        type="text"
                        placeholder="Doe"
                        className="border-gray-200"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Email</Label>
                <Input
                    type="text"
                    placeholder="Enter Email"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Address</Label>
                <Input
                    type="text"
                    placeholder="Enter Address"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Province</Label>
                <Input
                    type="text"
                    placeholder="Choose Province"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>City</Label>
                <Input
                    type="text"
                    placeholder="Choose City"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Sub District</Label>
                <Input
                    type="text"
                    placeholder="Choose Sub District"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Postal Code</Label>
                <Input
                    type="text"
                    placeholder="Enter Postal Code"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Phone/Whatsapp Number</Label>
                <Input
                    type="text"
                    placeholder="Enter Phone/Whatsapp Number"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Note</Label>
                <Input
                    type="text"
                    placeholder="Add Note"
                    className="border-gray-200"
                />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <div className="flex items-center gap-2">
                    <Checkbox id="create-account" />
                    <Label
                        htmlFor="create-account"
                        className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                        Create an account?
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="create-account" />
                    <Label
                        htmlFor="create-account"
                        className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                        Send me promos and product updates
                    </Label>
                </div>
            </div>
        </div>
    );
}
