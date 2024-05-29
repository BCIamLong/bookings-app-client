import axios from 'axios'
import Cookies from 'js-cookie'
import { appConfig } from '../config'
import { UserBookingsOption } from '@/interfaces'

// const { stripeClient } = stripeConfig;
const { SERVER_BASE_URL } = appConfig

const getBookings = async function ({
  cabinId,
  status,
}: {
  cabinId?: string
  status?: string | { operation: string; value: string }
}) {
  try {
    const token = Cookies.get('access-token')
    let url = `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/bookings`
    if (typeof status === 'string') url = url + `?status=${status}`
    if (typeof status === 'object')
      url = url + `?status[${status.operation}]=${status.value}`
    // console.log(url)
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // console.log(res)

    return res?.data?.data?.bookings
  } catch (err) {
    console.log(err)
    throw err
  }
}

const getUserBookings = async function ({
  cabinId,
  options = {},
}: {
  cabinId?: string
  options?: UserBookingsOption
}) {
  const token = Cookies.get('access-token')
  let url = `${SERVER_BASE_URL}/api/v1/bookings/me`
  if (cabinId) url = `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/bookings/me`
  const { status } = options

  if (status && typeof status === 'string')
    url = `${SERVER_BASE_URL}/api/v1/auth/me/bookings?status=${status}`
  if (status && typeof status === 'object')
    url = `${SERVER_BASE_URL}/api/v1/auth/me/bookings?status[${status.operation}]=${status.value}`
  // console.log(url)
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // console.log(res)

    return res?.data?.bookings || res?.data?.data?.bookings || null
  } catch (err) {
    console.log(err)
    throw err
  }
}

const getUserBooking = async function () {
  const token = Cookies.get('access-token')

  try {
    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/bookings/me/latest`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    // console.log(res);

    return res?.data?.booking
  } catch (err) {
    console.log(err)
    throw err
  }
}

const deleteUserBooking = async function (id: string) {
  const token = Cookies.get('access-token')

  try {
    const res = await axios.delete(
      `${SERVER_BASE_URL}/api/v1/bookings/${id}/me/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    // console.log(res)

    return res?.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

// * NEW VERSION OF STRIPE: https://docs.stripe.com/checkout/quickstart
const bookCabin = async function (data: {
  cabinId: string
  regularPrice: number
  name: string
  description: string
  image: string
  startDate: Date
  endDate: Date
  numGuests: number
  numNights: number
}) {
  try {
    const token = Cookies.get('access-token')
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/bookings/checkout-session`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'http://localhost:3009',
        },
      },
    )
    // console.log(res)
    return res?.data?.redirectUrl
  } catch (err) {
    console.log(err)
  }
}

// * OLD VERSION OF STRIPE: https://docs.stripe.com/js/deprecated/redirect_to_checkout
// const bookCabin = async function (id: string) {
//   try {
//     const token = Cookies.get("access-token");
//     const res = await axios.get(
//       `${SERVER_BASE_URL}/api/v1/bookings/checkout-session/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );

//     if (res?.data?.status === "success")
//       await stripeClient.redirectToCheckout({
//         sessionId: res?.data?.session.id,
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };

export {
  bookCabin,
  getUserBooking,
  getUserBookings,
  deleteUserBooking,
  getBookings,
}
