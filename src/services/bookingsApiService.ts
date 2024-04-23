import axios from "axios";
import Cookies from "js-cookie";
import { appConfig } from "../config";

// const { stripeClient } = stripeConfig;
const { SERVER_BASE_URL } = appConfig;

const getUserBookings = async function () {
  const token = Cookies.get("access-token");

  try {
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/bookings/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    return res?.data?.bookings;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserBooking = async function () {
  const token = Cookies.get("access-token");

  try {
    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/bookings/user/latest`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    // console.log(res);

    return res?.data?.booking;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// * NEW VERSION OF STRIPE: https://docs.stripe.com/checkout/quickstart
const bookCabin = async function (data: {
  cabinId: string;
  regularPrice: number;
  name: string;
  description: string;
  image: string;
}) {
  try {
    const token = Cookies.get("access-token");
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/bookings/checkout-session`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "http://localhost:3009",
        },
      },
    );
    console.log(res);
    return res?.data?.redirectUrl;
  } catch (err) {
    console.log(err);
  }
};

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

export { bookCabin, getUserBooking, getUserBookings };
