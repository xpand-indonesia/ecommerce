import { ContentTitle } from '@/components/ui/content-title';
import { EditProfileForm } from '@/features/profile';

export default function ProfilePage() {
    return (
        <>
            <ContentTitle className="hidden lg:block">My Profile</ContentTitle>
            <EditProfileForm />
        </>
    );
}
