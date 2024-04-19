import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Option from "../../../components/Option";
import Select from "../../../components/Select";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function DeleteMeForm() {
  return <Form type="profile">
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="heading-4">Delete your account</Heading>
    </div>
    <div className="text-xs text-stone-500 flex flex-col gap-2">

      <p>Deleting your account gives you full control over your data and privacy. By choosing this option, you permanently remove your information from our platform, ensuring your online presence aligns with your preferences. It's a simple, transparent process designed to empower you</p>
      <p>Your account will be deleted after 30 days, contact us for more information.</p>
      <ButtonLink type="simple" href="#">Contact</ButtonLink>
    </div>

    <FormItem
      type="profile"
      label="Choose delete account reason"
      labelFor="reason"
    >
      <Select type="delete-me" id="reason" >
        <Option type="delete-me" value="reason-1">Bad user experience</Option>
        <Option type="delete-me" value="reason-2">Bad user interface</Option>
      </Select>
    </FormItem>

    <FormItem
      type="profile"
      label="Password"
      labelFor="delete-password"
    >
      <Input
        type="text"
        variant="profile"
        id="delete-password"
        placeholder="Enter your password"
      />
    </FormItem>
    <Buttons>
      <Button type="secondary" size="medium"><span></span><span>Cancel</span></Button>
      <Button type="primary" size="medium">Delete</Button>
    </Buttons>
  </Form>
}