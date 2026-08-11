'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Input } from '@/components/ui/form/field/input';
import { Label } from '@/components/ui/form/label';

export function LoginForm() {
    const submit = () => {};

    return (
        <form className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
                <Label>Username or Email Address</Label>
                <Input
                    type="text"
                    placeholder="olivia@untitledui.com"
                    className="border-gray-200"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    className="border-gray-200"
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="cursor-pointer">
                    Remember Me
                </Label>
            </div>
            <Button
                variant="primary"
                className="mt-2 h-[51px] px-8 cursor-pointer font-semibold shadow-lg shadow-black/20"
                onClick={submit}
            >
                Login
            </Button>
        </form>
    );
}
