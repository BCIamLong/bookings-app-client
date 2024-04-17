import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";

export default function Verify2FAForm() {
  return (
    <Form type="login">
      <div className="mb-4 text-sm text-stone-600">
        <p>Your account is enabled 2FA feature!</p>
        <br />
        <p>
          Please use your OTP code for 2FA to verify to continue using our web
          app
        </p>
      </div>
      <FormItem type="login" label="OTP" labelFor="otp">
        <Input
          type="text"
          variant="login"
          required={true}
          id="otp"
          placeholder="Enter your OTP"
        />
      </FormItem>

      <Button type="login">Verify</Button>
    </Form>
  );
}
