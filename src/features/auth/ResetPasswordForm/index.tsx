import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";

import Button from "../../../components/Button";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import { useResetPassword } from "../useResetPassword";
import { ResetPasswordInput } from "../../../interfaces";
import Spinner from "../../../components/Spinner";
import { useTranslation } from "react-i18next";

export default function ResetPasswordForm() {
  const { t } = useTranslation()
  const { token } = useParams();
  const { isResetting, resetPassword } = useResetPassword();
  const { register, formState, handleSubmit, reset, getValues } =
    useForm<ResetPasswordInput>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<ResetPasswordInput> = function (data) {
    resetPassword(
      { data, token: token || '' },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        type="login"
        label={t('reset-pwd.form.password.label')}
        labelFor="password"
        errorMsg={errors.password?.message}
      >
        <Input
          type="password"
          variant="login"
          id="password"
          disabled={isResetting}
          placeholder="••••••••"
          registerOb={{
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
        label={t('reset-pwd.form.password-confirm.label')}
        labelFor="passwordConfirm"
        errorMsg={errors.passwordConfirm?.message}
      >
        <Input
          type="password"
          variant="login"
          disabled={isResetting}
          id="passwordConfirm"
          placeholder="••••••••"
          registerOb={{
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
        {isResetting ? <Spinner size="small" /> : `${t('reset-pwd.btn')}`}
      </Button>
    </Form>
  );
}
