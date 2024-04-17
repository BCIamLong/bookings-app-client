import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Button from "../../../components/Button";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import ButtonLink from "../../../components/ButtonLink";
import { getGoogleOauthUrl } from "../../../utils";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "../useLogin";
import Spinner from "../../../components/Spinner";
import { LoginInput } from "../../../interfaces";

export default function LoginForm() {
  const { login, isLogging } = useLogin();
  const { register, reset, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit: SubmitHandler<LoginInput> = function (data) {
    // console.log(data);
    login(data);
    reset();
  };

  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
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
          disabled={isLogging}
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
          disabled={isLogging}
          register={{
            ...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain letters or numbers.",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
              //   message:
              //     "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              // },
            }),
          }}
        />
      </FormItem>
      <div className="mt-4 flex flex-col gap-3">
        <Button type="login">
          {isLogging ? <Spinner size="small" /> : "Login"}
        </Button>
        <ButtonLink href={getGoogleOauthUrl()} type="login">
          <HiOutlineEnvelope className="text-2xl" />
          <span>Login with email</span>
        </ButtonLink>
      </div>
      <div className="flex justify-center gap-2">
        <ButtonLink type="login-type">
          <FaFacebook className="text-xl" />
          <span>Facebook</span>
        </ButtonLink>
        <ButtonLink type="login-type">
          <FaApple className="text-xl" />
          <span>Apple ID</span>
        </ButtonLink>
        <ButtonLink type="login-type">
          <FaGoogle className="text-xl" />
          <span>Google</span>
        </ButtonLink>
      </div>
      <ButtonLink type="simple">
        <Link to="/forgot-password">Forget the password?</Link>
      </ButtonLink>
      <p className="flex justify-center gap-1 text-sm text-inherit">
        <span>You don't have account yet, </span>
        <ButtonLink type="simple">
          <Link to="/signup">Sign up</Link>
        </ButtonLink>
      </p>
    </Form>
  );
}
