import Button from "../../../components/Button";

export default function ProfileOptions() {
  return <div className="flex gap-3 py-3">
    <Button type="secondary">Edit profile</Button>
    <Button type="secondary">Edit setting</Button>
  </div>
}