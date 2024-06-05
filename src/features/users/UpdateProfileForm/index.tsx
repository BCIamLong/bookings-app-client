import { SubmitHandler, useForm } from "react-hook-form";
import { HiArrowLeft } from "react-icons/hi2";

import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Spinner from "../../../components/Spinner";
import FileInput from "../../../components/form/FileInput";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import { useUserSession } from "../../auth/useUserSession";
import { EditProfileInput } from "../../../interfaces";
import { useEditProfile } from "../../auth/useEditProfile";
import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

export default function UpdateProfileForm() {
  const { t } = useTranslation()
  const { editProfile, isEditing } = useEditProfile()
  const { user: { fullName }, isLoading } = useUserSession()

  const { register, handleSubmit, formState, resetField, } = useForm<EditProfileInput>({
    defaultValues: { name: fullName }
  })
  const { errors } = formState

  const resetHandler = function (e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    resetField('avatar')
    resetField('name')
  }

  const onSubmit: SubmitHandler<EditProfileInput> = function (data) {
    // console.log(data)
    editProfile(data, {
      onSuccess: () => {
        // * we can use resetField to reset the specific field instead of use reset
        resetField('avatar')
      },
      onError: () => {
        // * of course we can reset with reset method with specific field like this way
        // ! notice that don't use reset and resetField in the same time then it might create the conflict and might not work
        // reset({
        //   name: fullName
        // })
        resetField('avatar')
        // resetField('name')
      }
    })

  }

  if (isLoading) return <Spinner size="normal" />

  return <Form type="profile" onSubmit={handleSubmit(onSubmit)}>
    <div className="border-b-[1.5px] border-stone-300 py-2 flex justify-between">
      <Heading type="tertiary">{t('profile.nav.edit.form.heading')}</Heading>
      <ButtonLink type="secondary" href="/profile" >
        <HiArrowLeft className="text-xl stroke-[1px]" />
        <span>{t('form.btn.back')}</span>
      </ButtonLink>
    </div>
    <FormItem
      type="profile"
      label={t('profile.nav.edit.form.name.label')}
      labelFor="name"
      errorMsg={errors.name?.message}
    >
      <Input
        type="text"
        variant="profile"
        id="name"
        placeholder={t('profile.nav.edit.form.name.holder')}
        registerOb={register('name', { required: 'This field is required' })}

      />
    </FormItem>
    <FormItem
      type="profile"
      label={t('profile.nav.edit.form.avatar.label')}
      labelFor="avatar"
      errorMsg={errors.avatar?.message}
    >
      <FileInput
        variant="profile"
        id="avatar"
        placeholder="Enter your name"
        registerOb={register('avatar')}


      />
    </FormItem>
    <div className="flex justify-between items-center w-[80%] py-2 thin:max-lg:w-full">
      <p className="text-stone-500">{t('profile.nav.edit.form.description')}</p>
      <Buttons>
        <Button type="secondary" size="medium" onClick={resetHandler} >
          <span></span><span>{t('form.btn.cancel')}</span>
        </Button>
        <Button type="primary" size="medium">{isEditing ? <Spinner size="small" /> : `${t('form.btn.save')}`}</Button>
      </Buttons>
    </div>

  </Form>
}