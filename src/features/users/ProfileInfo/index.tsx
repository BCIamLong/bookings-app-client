import ProfileOptions from "../ProfileOptions"


// ! THis component is not use because we build layout for this
export default function ProfileInfo() {
  return <div>
    <ProfileOptions />
    <div className="flex flex-col gap-4 text-stone-700">
      <p className="underline capitalize">Reviewed by you</p>
    </div>
  </div>
}