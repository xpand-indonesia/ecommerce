'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';
import { ChangePasswordTrigger } from '../components/change-password-trigger';
import { useState } from 'react';
import { ChangePasswordForm } from '../components/change-password-form';

export function EditProfileForm() {
    const [isChangePassword, setIsChangePassword] = useState(false);

    return (
        <div className="flex flex-col gap-6">
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
            {isChangePassword ? (
                <ChangePasswordForm />
            ) : (
                <ChangePasswordTrigger
                    onChange={() => setIsChangePassword(true)}
                />
            )}
            <Button>Save</Button>
        </div>
    );
}
