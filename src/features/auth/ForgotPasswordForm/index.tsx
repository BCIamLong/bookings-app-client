import { useForm, SubmitHandler } from "react-hook-form";

import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { useForgotPassword } from "../useForgotPassword";
import { ForgotPasswordInput } from "../../../interfaces";

export default function ForgotPasswordForm() {
  const { isSending, forgotPassword } = useForgotPassword();
  const { register, formState, handleSubmit, reset } =
    useForm<ForgotPasswordInput>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<ForgotPasswordInput> = function (data) {
    forgotPassword(data, {
      onSettled: () => {
        reset();
      },
    });
  };

  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 text-sm text-stone-600">
        <p>
          Enter the email address you used when you joined and we'll send you
          instructions to reset your password.
        </p>
        <br />
        <p>
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </p>
      </div>
      <FormItem
        type="login"
        label="Email"
        labelFor="email"
        errorMsg={errors.email?.message}
      >
        <Input
          type="email"
          variant="login"
          id="email"
          disabled={isSending}
          placeholder="Enter your email"
          register={{
            ...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
                message: "Please provide the valid email.",
              },
            }),
          }}
        />
      </FormItem>

      <Button type="login">
        {isSending ? <Spinner size="small" /> : "Send reset instructions"}
      </Button>
    </Form>
  );
}
