import QRCode from "qrcode";
import { SubmitHandler, useForm } from "react-hook-form";

import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import { Verify2FAInput } from "../../../interfaces";
import { useVerify2FA } from "../useVerify2FA";
import Spinner from "../../../components/Spinner";
import { useUserSession } from "../useUserSession";
import { useEffect, useState } from "react";

export default function Verify2FAForm() {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const { verify2FA, isVerifying } = useVerify2FA()
  const { user, isLoading } = useUserSession()
  const { register, handleSubmit, reset, formState } = useForm<Verify2FAInput>()
  const { errors } = formState


  useEffect(() => {
    const fetchQrCodeUrl = async function () {
      const url = await QRCode.toDataURL(user?.otp2FAAuthUrl)
      setQrCodeUrl(url)
    }
    fetchQrCodeUrl()

  }, [setQrCodeUrl, user?.otp2FAAuthUrl])

  const onSubmit: SubmitHandler<Verify2FAInput> = function (data) {
    // console.log(data)
    verify2FA(data, {
      onSuccess: () => {
        reset
      }
    })
  }

  if (isLoading) return <Spinner size="normal" />

  return (
    <Form type="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-sm text-stone-600 leading-6">
        <p className="mb-1">Your account is enabled 2FA feature!</p>
        <p className="mb-4">
          Please use your OTP code for 2FA to verify to continue using our web
          app
        </p>
        <img src={qrCodeUrl} alt="2FA QR code" />
      </div>
      <FormItem type="login" label="OTP" labelFor="otp" errorMsg={errors.otp?.message}>
        <Input
          type="text"
          variant="login"
          id="otp"
          placeholder="Enter your OTP"
          registerOb={register('otp', {
            required: 'This field is required', pattern: {
              value: /^\d{6}$/,
              message: 'Please enter a 6-digit number.'
            }
          })}

        />
      </FormItem>

      <Button type="login">{isVerifying ? <Spinner size="small" /> : 'Verify'}</Button>
    </Form>
  );
}
