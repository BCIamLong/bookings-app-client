import { useForm, SubmitHandler } from "react-hook-form";

import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { useForgotPassword } from "../useForgotPassword";
import { ForgotPasswordInput } from "../../../interfaces";
import { useTranslation } from "react-i18next";

export default function ForgotPasswordForm() {
  const { isSending, forgotPassword } = useForgotPassword();
  const { register, formState, handleSubmit, reset } =
    useForm<ForgotPasswordInput>();
  const { errors } = formState;
  const { t } = useTranslation()

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
          {t('forgot-pwd.description1')}
        </p>
        <br />
        <p>
          {t('forgot-pwd.description2')}
        </p>
      </div>
      <FormItem
        type="login"
        label={t('forgot-pwd.form.email.label')}
        labelFor="email"
        errorMsg={errors.email?.message}
      >
        <Input
          type="email"
          variant="login"
          id="email"
          disabled={isSending}
          placeholder={t('forgot-pwd.form.email.holder')}
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

      <Button type="login">
        {isSending ? <Spinner size="small" /> : `${t('forgot-pwd.btn')}`}
      </Button>
    </Form>
  );
}
