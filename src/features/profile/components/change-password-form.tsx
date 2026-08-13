'use client';

import { Eye } from '@/components/icons/eye';
import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';
import { useState } from 'react';

export function ChangePasswordForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [reNewPasswordVisible, setReNewPasswordVisible] = useState(false);

    return (
        <div className="pb-6 border-b border-gray-300 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label>Current Password</Label>
                <div className="relative">
                    <Input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Enter Current Password"
                        className="border-gray-200 pr-13"
                    />
                    <div
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-0 top-1/2 -translate-y-[50%] h-full px-4 flex items-center justify-center rounded-full cursor-pointer"
                    >
                        <Eye className="size-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Label>New Password</Label>
                <div className="relative">
                    <Input
                        type={newPasswordVisible ? 'text' : 'password'}
                        placeholder="Enter New Password"
                        className="border-gray-200 pr-13"
                    />
                    <div
                        onClick={() =>
                            setNewPasswordVisible(!newPasswordVisible)
                        }
                        className="absolute right-0 top-1/2 -translate-y-[50%] h-full px-4 flex items-center justify-center rounded-full cursor-pointer"
                    >
                        <Eye className="size-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Label>Re-Enter New Password</Label>
                <div className="relative">
                    <Input
                        type={reNewPasswordVisible ? 'text' : 'password'}
                        placeholder="Re-Enter New Password"
                        className="border-gray-200 pr-13"
                    />
                    <div
                        onClick={() =>
                            setReNewPasswordVisible(!reNewPasswordVisible)
                        }
                        className="absolute right-0 top-1/2 -translate-y-[50%] h-full px-4 flex items-center justify-center rounded-full cursor-pointer"
                    >
                        <Eye className="size-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
