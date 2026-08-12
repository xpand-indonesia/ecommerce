import { Button } from '@/components/ui/button';
import { ContentTitle } from '@/components/ui/content-title';
import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';

export default function ProfilePage() {
    return (
        <>
            <ContentTitle>My Profile</ContentTitle>
            <div className="pb-6 border-b border-gray-300 flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                            className="border-gray-200"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <Label>Username</Label>
                        <Input
                            type="text"
                            placeholder="johndoe"
                            className="border-gray-200"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Email Address</Label>
                    <Input
                        type="text"
                        placeholder="john@doe.com"
                        className="border-gray-200"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Phone Number</Label>
                    <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="border-gray-200"
                    />
                </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center justify-between">
                <div className="font-heading text-lg font-bold text-gray-800">
                    Change Password
                </div>
                <Button variant="outline" className="h-[33px] w-[131px]">
                    Change
                </Button>
            </div>
            <Button>Save</Button>
        </>
    );
}
