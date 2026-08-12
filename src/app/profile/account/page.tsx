import { ContentTitle } from '@/components/ui/content-title';

export default function ProfileAccountPage() {
    return (
        <>
            <ContentTitle>Account Information</ContentTitle>
            <div className="flex flex-col gap-10">
                <div className="text-sm text-gray-800">
                    You will lose all your data on our web store and will not be
                    able to retrieve any content, such as personal information,
                    purchase history, points, and membership.
                </div>
                <div className="mx-auto text-danger p-2 cursor-pointer">
                    Remove My Account
                </div>
            </div>
        </>
    );
}
