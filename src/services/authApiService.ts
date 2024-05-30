import axios from 'axios'
// import Cookies from 'js-cookie'
import { appConfig } from '../config'
import {
  SignupInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  Verify2FAInput,
  EditProfileInput,
  EditEmailInput,
  CheckPasswordInput,
  VerifyEnable2FAInput,
  DeleteMeInput,
} from '../interfaces'
// import { UserSession } from "../interfaces";

const { SERVER_BASE_URL } = appConfig
// const { ACCESS_TOKEN_EXPIRE } = cookieConfig

axios.defaults.withCredentials = true

// ! we don't need to use Cookies.set('access-token', res.data.token) or Cookies.get() from the cookie package to duo with cookies in cors so that my mistake
// * so basically when we set cookie from server, API like nodejs, express it will set cookies also to our client but we do not see it on browser maybe
// * but we can use these cookies by use withCredentials in axios to include the credentials infos like cookies...
// * and the easy way to do that is use: axios.defaults.withCredentials = true at the top to configure all the places we use axios bellow right
// * or we can go to each place and place withCredentials: true in the option object

// const env = import.meta.env.MODE

const login = async function ({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/login`, {
      email,
      password,
    })

    // Cookies.set('access-token', res.data.token, {
    //   expires: ACCESS_TOKEN_EXPIRE,
    //   sameSite: 'none',
    //   secure: env === 'production',
    // })

    if (res.data.verifyEmail === false) throw new Error(res.data.message)
    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const signup = async function (data: SignupInput) {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/signup`, data)

    // Cookies.set('access-token', res.data.token)

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const logout = async function () {
  try {
    // const token = Cookies.get('access-token')
    // let options = {}
    // if (env === 'development')
    //   options = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // if (env === 'production')
    const options = {
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:3009',
        // Authorization: `Bearer ${token}`,
      },
    }

    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/auth/logout`,
      options,
    )
    // console.log(res);

    // Cookies.remove('access-token')

    return res?.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const getUserSession = async function () {
  try {
    // const token = Cookies.get('access-token')

    //  || Cookies.get("refresh-token");
    // ! so the client will not be able to access to the cookie is set from server because the security reason, so if our app really have SSL, https secure then we can do that we can send credential (cookies) along with request and the client also access to the cookie from server
    // * but to do that we need to able the SSL, https on both client and server, in development we can set the access cookie to long to develop our app
    // const token = document.cookie || Cookies.get("refresh-token");
    // console.log(token);
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/auth/session`, {
      // withCredentials: true,
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    // console.log(res);

    return res?.data?.session?.user
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const forgotPassword = async function (data: ForgotPasswordInput) {
  try {
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/auth/forgot-password`,
      data,
    )

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const resetPassword = async function (data: ResetPasswordInput, token: string) {
  try {
    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/auth/reset-password/${token}`,
      data,
    )

    // Cookies.set("access-token", res.data.token);

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const verify2FA = async function (data: Verify2FAInput) {
  try {
    // const token = Cookies.get('access-token')
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/auth/2FA/validate-otp`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const editProfile = async function (data: EditProfileInput) {
  // const token = Cookies.get('access-token')
  const { name, avatar } = data
  const requestBody = new FormData()
  requestBody.append('name', name)
  requestBody.append('fullName', name)

  if (avatar[0]) requestBody.append('avatar', avatar[0])

  try {
    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/auth/me`,
      requestBody,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${token}`,
        },
      },
    )

    // Cookies.set("access-token", res.data.token);

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}
const editEmail = async function (data: EditEmailInput) {
  // const token = Cookies.get('access-token')

  try {
    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/auth/me`,
      { email: data.email },
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )

    // Cookies.set("access-token", res.data.token);

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const checkPassword = async function (data: CheckPasswordInput) {
  // const token = Cookies.get('access-token')

  try {
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/auth/update-password/verify`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )

    // Cookies.set("access-token", res.data.token);

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const editPassword = async function (data: ResetPasswordInput, token: string) {
  try {
    // const accessToken = Cookies.get('access-token')

    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/auth/update-password/${token}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    // Cookies.set('access-token', res.data.token, {
    //   expires: ACCESS_TOKEN_EXPIRE,
    // })

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const enable2FA = async function () {
  try {
    // const token = Cookies.get('access-token')

    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/auth/2FA/generate-otp`,
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    // console.log(res);

    return res?.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const verifyEnable2FA = async function (data: VerifyEnable2FAInput) {
  try {
    // const token = Cookies.get('access-token')

    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/auth/2FA/verify-otp`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const disable2FA = async function () {
  try {
    // const token = Cookies.get('access-token')

    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/auth/2FA/disable`, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    })
    // console.log(res);

    return res?.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const deleteMe = async function (data: DeleteMeInput) {
  try {
    // const token = Cookies.get('access-token')

    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/me`, data, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    })
    // Cookies.remove('access-token')

    return res.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}
export {
  login,
  getUserSession,
  signup,
  forgotPassword,
  resetPassword,
  verify2FA,
  logout,
  editProfile,
  editEmail,
  checkPassword,
  editPassword,
  enable2FA,
  verifyEnable2FA,
  disable2FA,
  deleteMe,
}
