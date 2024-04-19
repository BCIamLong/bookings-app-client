import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function UpdateEmailForm() {
  return <Form type="profile">
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="heading-4">Edit your email</Heading>
    </div>
    <FormItem
      type="profile"
      label="Email"
      labelFor="email"
    >
      <Input
        type="text"
        variant="profile"
        id="email"
        placeholder="Enter your new email"
      />
    </FormItem>
    <Buttons>
      <Button type="secondary" size="medium"><span></span><span>Cancel</span></Button>
      <Button type="primary" size="medium">Save</Button>
    </Buttons>
  </Form>
}