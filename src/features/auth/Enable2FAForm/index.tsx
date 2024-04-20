import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import QRCode from "../QRCode";
import { VerifyEnable2FAInput } from "../../../interfaces";
import { useVerifyEnable2FA } from "../useVerifyEnable2FA";
import Spinner from "../../../components/Spinner";
import { HiXMark } from "react-icons/hi2";

export default function Enable2FAForm() {
  const { register, handleSubmit, formState } = useForm<VerifyEnable2FAInput>()
  const { errors } = formState
  const { isVerifying, verifyEnable2FA } = useVerifyEnable2FA()

  const onSubmit: SubmitHandler<VerifyEnable2FAInput> = function (data) {
    // console.log(data)
    verifyEnable2FA(data)

  }

  return <div className="px-4" onSubmit={handleSubmit(onSubmit)}>
    <Form type="profile">
      <div className="border-b-[1.5px] border-stone-300 py-2">
        <Heading type="heading-4">Enter your OTP</Heading>
      </div>
      <div className="flex gap-2">
        <QRCode />
        <p className="text-sm text-stone-600 mt-3"> Now, enter the OTP to finalize the setup and ensure enhanced protection for your account</p>
      </div>
      <FormItem
        type="profile"
        label="OTP"
        labelFor="otp"
        errorMsg={errors.otp?.message}
      >
        <Input
          type="text"
          variant="profile"
          id="otp"
          placeholder="Enter your otp"
          registerOb={register('otp', {
            required: 'This field is required', pattern: {
              value: /^\d{6}$/,
              message: 'Please enter a 6-digit number.'
            }
          })}
        />
      </FormItem>
      <Buttons>
        <Button type="secondary" reset={true} size="medium">
          <span><HiXMark className="stroke-[1.5px]" />
          </span><span>Cancel</span>
        </Button>
        <Button type="primary" size="medium">{isVerifying ? <Spinner size="small" /> : 'Save'}</Button>
      </Buttons>
    </Form>
  </div>
}