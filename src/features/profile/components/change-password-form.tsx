'use client';

import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';
import { useState } from 'react';

export function ChangePasswordForm() {
    const [isChangePassword, setIsChangePassword] = useState(false);

    return (
        <div className="pb-6 border-b border-gray-300 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label>Current Password</Label>
                <Input
                    type="text"
                    placeholder="Enter Current Password"
                    className="border-gray-200"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label>New Password</Label>
                <Input
                    type="text"
                    placeholder="Enter New Password"
                    className="border-gray-200"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Re-Enter New Password</Label>
                <Input
                    type="text"
                    placeholder="Re-Enter New Password"
                    className="border-gray-200"
                />
            </div>
        </div>
    );
}
