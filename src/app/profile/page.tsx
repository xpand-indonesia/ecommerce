import { ContentTitle } from '@/components/ui/content-title';
import { EditProfileForm } from '@/features/profile';

export default function ProfilePage() {
    return (
        <>
            <ContentTitle>My Profile</ContentTitle>
            <EditProfileForm />
        </>
    );
}
