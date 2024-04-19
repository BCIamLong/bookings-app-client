import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function UpdatePasswordForm() {
  return <Form type="profile">
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="heading-4">Edit your password</Heading>
    </div>
    <FormItem
      type="profile"
      label="Password"
      labelFor="password"
    >
      <Input
        type="text"
        variant="profile"
        id="password"
        placeholder="Enter your new password"
      />
    </FormItem>

    <FormItem
      type="profile"
      label="Password Confirm"
      labelFor="passwordConfirm"
    >
      <Input
        type="text"
        variant="profile"
        id="passwordConfirm"
        placeholder="Confirm your new password"
      />
    </FormItem>
    <Buttons>
      <Button type="secondary" size="medium"><span></span><span>Cancel</span></Button>
      <Button type="primary" size="medium">Save</Button>
    </Buttons>
  </Form>
}