import { HeaderProp } from '@/components/layout';
import { ContentTitle } from '@/components/ui/content-title';
import { Separator } from '@/components/ui/separator';
import { MENUS, ProfileMenuItem } from '@/features/profile';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderProp style="default" />
            <div className="header-safe-8 py-8">
                <div className="max-w-[853px] mx-auto flex items-stretch gap-6">
                    <div className="w-[276px] flex flex-col gap-6">
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
                    <div>
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
