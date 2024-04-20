import { useEffect, useState } from "react"
import { toDataURL } from "qrcode"
import { useUserSession } from "../useUserSession"
import Spinner from "../../../components/Spinner"

export default function QRCode() {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const { user, isLoading } = useUserSession()

  useEffect(() => {
    const fetchQrCodeUrl = async function () {
      const url = await toDataURL(user?.otp2FAAuthUrl)
      setQrCodeUrl(url)
    }
    fetchQrCodeUrl()

  }, [setQrCodeUrl, user?.otp2FAAuthUrl])

  if (isLoading) return <Spinner size="normal" />

  return <img className="w-[30%]" src={qrCodeUrl} alt="2FA QR code" />
}