import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import FileInput from "../../../components/form/FileInput";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function UpdateProfileForm() {
  return <Form type="profile">
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="tertiary">Edit your profile</Heading>
    </div>
    <FormItem
      type="profile"
      label="Name"
      labelFor="name"
    >
      <Input
        type="text"
        variant="profile"
        id="name"
        placeholder="Enter your name"

      />
    </FormItem>
    <FormItem
      type="profile"
      label="Avatar"
      labelFor="avatar"
    >
      <FileInput
        variant="profile"
        id="avatar"
        placeholder="Enter your name"

      />
    </FormItem>
    <div className="flex justify-between items-center w-[80%] py-2">
      <p className="text-stone-500">All the required user information can be added here...</p>
      <Buttons>
        <ButtonLink type="secondary" href='/profile' size="medium"><span></span><span>Cancel</span></ButtonLink>
        <Button type="primary" size="medium">Save</Button>
      </Buttons>
    </div>

  </Form>
}