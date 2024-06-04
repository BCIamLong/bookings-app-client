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
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t } = useTranslation()
  const { login, isLogging } = useLogin();
  const { register, reset, handleSubmit, formState } = useForm<LoginInput>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<LoginInput> = function (data) {
    // console.log(data);
    login(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        type="login"
        label={t('login.form.email.label')}
        labelFor="email"
        errorMsg={errors.email?.message}
      >
        <Input
          type="email"
          variant="login"
          id="email"
          placeholder={t('login.form.email.holder')}
          disabled={isLogging}
          registerOb={{
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
        label={t('login.form.password.label')}
        labelFor="password"
        errorMsg={errors.password?.message}
      >
        <Input
          type="password"
          variant="login"
          id="password"
          placeholder="••••••••"
          disabled={isLogging}
          registerOb={{
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
          {isLogging ? <Spinner size="small" /> : `${t('login.form.btn.default')}`}
        </Button>
        <ButtonLink href={getGoogleOauthUrl()} type="login">
          <HiOutlineEnvelope className="text-2xl" />
          <span>{t('login.form.btn.email')}</span>
        </ButtonLink>
      </div>
      <div className="flex justify-center gap-2 text-stone-700">
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
        <Link to="/forgot-password">{t('login.form.links.forgot-pwd')}</Link>
      </ButtonLink>
      <p className="flex justify-center gap-1 text-sm text-stone-500">
        <span>{t('login.form.links.signup.extra-text')}</span>
        <ButtonLink type="simple">
          <Link to="/signup">{t('login.form.links.signup.link')}</Link>
        </ButtonLink>
      </p>
    </Form>
  );
}
