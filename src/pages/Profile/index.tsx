import ReviewsList from "../../features/reviews/ReviewsList";
import ProfileOptions from "../../features/users/ProfileOptions";
import ProfileSidebar from "../../features/users/ProfileSidebar";
import UpdateProfileForm from "../../features/users/UpdateProfileForm";
// ! THIS PAGE NOT USE BECAUSE WE WANT THE PROFILE TO BE NESTED ROUTE TO SERVE OUR APP REQUIREMENTS
export default function Profile() {
    return <div className="p-12 h-screen grid grid-cols-[1fr_3fr]">
        <ProfileSidebar />
        <div>
            <ProfileOptions />
            <ReviewsList />
            <UpdateProfileForm />
        </div>
    </div>
}