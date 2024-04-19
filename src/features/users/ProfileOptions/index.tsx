import ButtonLink from "../../../components/ButtonLink";

export default function ProfileOptions() {
  return <div className="flex gap-3 py-3">
    <ButtonLink type="secondary" href="edit">Edit profile</ButtonLink>
    <ButtonLink type="secondary" href="setting">Setting</ButtonLink>
  </div>
}