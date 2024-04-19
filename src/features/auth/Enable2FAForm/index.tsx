import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import QRCode from "../QRCode";

export default function Enable2FAForm() {
  return <div className="px-4">
    <Form type="profile">
      <div className="border-b-[1.5px] border-stone-300 py-2">
        <Heading type="heading-4">Enter your OTP</Heading>
      </div>
      {/* <QRCode /> */}
      <FormItem
        type="profile"
        label="OTP"
        labelFor="otp"
      >
        <Input
          type="text"
          variant="profile"
          id="otp"
          placeholder="Enter your otp"
        />
      </FormItem>
      <Buttons>
        <Button type="secondary" size="medium"><span></span><span>Cancel</span></Button>
        <Button type="primary" size="medium">Save</Button>
      </Buttons>
    </Form>
  </div>
}