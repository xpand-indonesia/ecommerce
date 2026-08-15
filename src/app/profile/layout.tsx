import { ArrowLeft } from '@/components/icons/arrow-left';
import { HeaderProp } from '@/components/layout';
import { ContentTitle } from '@/components/ui/content-title';
import { Separator } from '@/components/ui/separator';
import { MENUS, ProfileMenuItem, ProfileMenuSelect } from '@/features/profile';
import Link from 'next/link';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderProp style="default" />
            <div className="py-4 header-safe-4 min-h-screen lg:py-8 lg:header-safe-8 lg:min-h-auto">
                <div className="lg:max-w-[853px] lg:mx-auto flex flex-col lg:flex-row lg:items-stretch gap-6 px-4 lg:px-0">
                    <div className="space-y-4 block lg:hidden">
                        <Link
                            href="/orders"
                            className="inline-flex items-center text-gray-800 gap-4"
                        >
                            <ArrowLeft className="size-6" />
                            <span className="text-2xl font-bold">Settings</span>
                        </Link>
                        <ProfileMenuSelect />
                    </div>
                    <div className="hidden lg:flex w-[276px] flex-col gap-6">
                        <ContentTitle>Settings</ContentTitle>
                        <ul className="flex flex-col gap-2">
                            {MENUS.map((menu, idx) => (
                                <li key={`profile-menu-${idx}`}>
                                    <ProfileMenuItem
                                        title={menu.title}
                                        href={menu.href}
                                        icon={menu.icon}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <Separator
                            orientation="vertical"
                            className="bg-gray-300"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-6">{children}</div>
                </div>
            </div>
        </>
    );
}
