import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import { CheckPasswordInput, EditPasswordInput } from "../../../interfaces";
import { useState } from "react";
import { useCheckPassword } from "../useCheckPassword";
import Spinner from "../../../components/Spinner";
import { useEditPassword } from "../useEditPassword";
import { useUserSession } from "../useUserSession";

export default function UpdatePasswordForm() {
  const [isAllowed, setIsAllowed] = useState(false)
  const { checkPassword, isChecking } = useCheckPassword()
  const { editPassword, isEditing } = useEditPassword()
  const { user: { updatePasswordToken: token }, isLoading } = useUserSession()

  const { register: register1, handleSubmit: handleSubmit1, reset: reset1, formState: formState1 } = useForm<CheckPasswordInput>()
  const { errors: errors1 } = formState1
  const { register, handleSubmit, reset, formState, getValues } = useForm<EditPasswordInput>()
  const { errors } = formState

  const onSubmit1: SubmitHandler<CheckPasswordInput> = function (data) {
    // console.log(data)
    checkPassword(data, {
      onSuccess: () => {
        reset1()
        setIsAllowed(true)
      }
    })
  }

  const onSubmit: SubmitHandler<EditPasswordInput> = function (data) {
    console.log(data)
    editPassword({ data, token }, {
      onSuccess: () => {
        reset()
        setIsAllowed(false)
      }
    })
  }

  if (isLoading) return <Spinner size="normal" />
  return <div>
    <div className="border-b-[1.5px] border-stone-300 py-2 mt-4">
      <Heading type="heading-4">Edit your password</Heading>
    </div>
    <div className={`${!isAllowed ? '' : 'pointer-events-none blur-[3px]'}`}>
      <Form type="profile" onSubmit={handleSubmit1(onSubmit1)}>
        <FormItem
          type="profile"
          label="Current Password"
          labelFor="current-password"
          errorMsg={errors1.password?.message}
        >
          <Input
            type="password"
            variant="profile"
            id="current-password"
            placeholder="Enter your new password"
            disabled={isChecking}
            registerOb={register1('password', {
              required: "This field is required",
              pattern: {
                value: /^(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain letters or numbers.",
              },
            })}
          />
        </FormItem>

        <Buttons>
          <Button type="secondary" reset={true} size="medium"><span></span><span>Cancel</span></Button>
          <Button type="primary" size="medium">{isChecking ? <Spinner size="small" /> : 'Check'}</Button>
        </Buttons>
      </Form>
    </div>
    <div className={`${isAllowed ? '' : 'pointer-events-none blur-[3px]'}`}>
      <Form type="profile" onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          type="profile"
          label="New Password"
          labelFor="password"
          errorMsg={errors.password?.message}
        >
          <Input
            type="password"
            variant="profile"
            id="password"
            disabled={isEditing}
            placeholder="Enter your new password"
            registerOb={register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain letters or numbers.",
              },
            })}
          />
        </FormItem>

        <FormItem
          type="profile"
          label="Confirm New Password"
          labelFor="passwordConfirm"
          errorMsg={errors.passwordConfirm?.message}
        >
          <Input
            type="password"
            variant="profile"
            id="passwordConfirm"
            disabled={isEditing}
            placeholder="Confirm your new password"
            registerOb={register("passwordConfirm", {
              required: "This field is required",
              validate: (val) =>
                val === getValues().password ||
                "Please write the correct password confirm",
            })}
          />
        </FormItem>
        <Buttons>
          <Button type="secondary" reset={true} size="medium"><span></span><span>Cancel</span></Button>
          <Button type="primary" size="medium">{isEditing ? <Spinner size="small" /> : 'Save'}</Button>
        </Buttons>
      </Form>
    </div>
  </div>
}