import ReviewsList from "../../features/reviews/ReviewsList";
import ProfileOptions from "../../features/users/ProfileOptions";
import ProfileSidebar from "../../features/users/ProfileSidebar";

export default function Profile() {
    return <div className="p-12 h-screen grid grid-cols-[1fr_3fr]">
        <ProfileSidebar />
        <div>
            <ProfileOptions />
            <ReviewsList />
        </div>
    </div>
}