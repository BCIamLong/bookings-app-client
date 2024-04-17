import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";

export default function ForgotPasswordForm() {
  return (
    <Form type="login">
      <div className="mb-4 text-sm text-stone-600">
        <p>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </p>
        <br />
        <p>
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </p>
      </div>
      <FormItem type="login" label="Email" labelFor="email">
        <Input
          type="email"
          variant="login"
          required={true}
          id="email"
          placeholder="Enter your email"
        />
      </FormItem>

      <Button type="login">Send reset instructions</Button>
    </Form>
  );
}
