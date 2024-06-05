import { MouseEvent } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Spinner from "../../../components/Spinner";
import { EditEmailInput } from "../../../interfaces";
import { useUserSession } from "../useUserSession";
import { useEditEmail } from "../useEditEmail";
import { useTranslation } from "react-i18next";

export default function UpdateEmailForm() {
  const { t } = useTranslation()
  const { editEmail, isEditing } = useEditEmail()
  const { user: { email }, isLoading } = useUserSession()
  const { register, reset, formState, handleSubmit } = useForm<EditEmailInput>({
    defaultValues: { email }
  })
  const { errors } = formState

  const onSubmit: SubmitHandler<EditEmailInput> = function (data) {
    // console.log(data)
    editEmail(data)
  }
  const resetHandler = function (e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    reset()
  }

  if (isLoading) return <Spinner size="normal" />

  return <Form type="profile" onSubmit={handleSubmit(onSubmit)}>
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="heading-4">{t('profile.nav.settings.nav.account.forms.edit-email.heading')}</Heading>
    </div>
    <FormItem
      type="profile"
      label={t('profile.nav.settings.nav.account.forms.edit-email.email.label')}
      labelFor="email"
      errorMsg={errors.email?.message}
    >
      <Input
        type="text"
        variant="profile"
        id="email"
        placeholder={t('profile.nav.settings.nav.account.forms.edit-email.email.holder')}
        registerOb={register('email', { required: 'This field is required' })}
        disabled={isEditing}
      />
    </FormItem>
    <Buttons>
      <Button type="secondary" size="medium" onClick={resetHandler}><span><HiOutlineXMark className="text-xl stroke-[2.4px]" /></span><span>{t('form.btn.cancel')}</span></Button>
      <Button type="primary" size="medium">{
        isEditing ? <Spinner size="small" /> : `${t('form.btn.save')}`
      }</Button>
    </Buttons>
  </Form>
}