import Button from "../../../components/Button";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function ResetPasswordForm() {
  return (
    <Form type="login">
      <FormItem type="login" label="Password" labelFor="password">
        <Input
          type="password"
          variant="login"
          required={true}
          id="password"
          placeholder="••••••••"
        />
      </FormItem>

      <FormItem
        type="login"
        label="Password confirm"
        labelFor="passwordConfirm"
      >
        <Input
          type="password"
          variant="login"
          required={true}
          id="passwordConfirm"
          placeholder="••••••••"
        />
      </FormItem>
      <Button type="login">Reset</Button>
    </Form>
  );
}
