import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import { useSignup } from "../useSignup";
import Spinner from "../../../components/Spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupInput } from "../../../interfaces";

export default function SignUpForm() {
  const { isSigning, signup } = useSignup();
  const { register, reset, handleSubmit, getValues, formState } =
    useForm<SignupInput>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SignupInput> = function (data) {
    console.log(data);
    signup(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        type="login"
        label="Full name"
        labelFor="fullName"
        errorMsg={errors.fullName?.message}
      >
        <Input
          type="text"
          variant="login"
          id="fullName"
          placeholder="Enter your full name"
          disabled={isSigning}
          register={{
            ...register("fullName", { required: "This field is required" }),
          }}
        />
      </FormItem>
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
          placeholder="Enter your email"
          disabled={isSigning}
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
      <FormItem
        type="login"
        label="Password"
        labelFor="password"
        errorMsg={errors.password?.message}
      >
        <Input
          type="password"
          variant="login"
          id="password"
          placeholder="••••••••"
          disabled={isSigning}
          register={{
            ...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain letters or numbers.",
              },
            }),
          }}
        />
      </FormItem>
      <FormItem
        type="login"
        label="Password confirm"
        labelFor="passwordConfirm"
        errorMsg={errors.passwordConfirm?.message}
      >
        <Input
          type="password"
          variant="login"
          id="passwordConfirm"
          placeholder="••••••••"
          disabled={isSigning}
          register={{
            ...register("passwordConfirm", {
              required: "This field is required",
              validate: (val) =>
                val === getValues().password ||
                "Please write the correct password confirm",
            }),
          }}
        />
      </FormItem>
      <Button type="login">
        {isSigning ? <Spinner size="small" /> : "Sign up"}
      </Button>
      <p className="flex justify-center gap-1 text-sm text-inherit">
        <span>You're already have account, </span>
        <ButtonLink type="simple">
          <Link to="/login">Login</Link>
        </ButtonLink>
      </p>
    </Form>
  );
}
