import ReviewsList from "../../reviews/ReviewsList"
import ProfileOptions from "../ProfileOptions"


// ! THis component is not use because we build layout for this
export default function ProfileInfo() {
  return <div>
    <ProfileOptions />
    <ReviewsList />
  </div>
}