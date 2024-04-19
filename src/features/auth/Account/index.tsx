import Heading from "../../../components/Heading";
import DeleteMeForm from "../DeleteMeForm";
import UpdateEmailForm from "../UpdateEmailForm";
import UpdatePasswordForm from "../UpdatePasswordForm";

export default function Account() {
  return <div className="px-4 overflow-auto h-[90vh]">
    <Heading type="tertiary">Your account</Heading>
    <UpdateEmailForm />
    <UpdatePasswordForm />
    <DeleteMeForm />
  </div>
}