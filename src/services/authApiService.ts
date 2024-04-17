import axios from "axios";
import Cookies from "js-cookie";
import { appConfig } from "../config";
import { SignupInput } from "../interfaces";
// import { UserSession } from "../interfaces";

const { SERVER_BASE_URL } = appConfig;

const login = async function ({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/login`, {
      email,
      password,
    });

    Cookies.set("access-token", res.data.token);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const signup = async function (data: SignupInput) {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/signup`, data);

    Cookies.set("access-token", res.data.token);

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserSession = async function () {
  try {
    const token = Cookies.get("access-token");

    //  || Cookies.get("refresh-token");
    // ! so the client will not be able to access to the cookie is set from server because the security reason, so if our app really have SSL, https secure then we can do that we can send credential (cookies) along with request and the client also access to the cookie from server
    // * but to do that we need to able the SSL, https on both client and server, in development we can set the access cookie to long to develop our app
    // const token = document.cookie || Cookies.get("refresh-token");
    // console.log(token);
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/auth/session`, {
      // withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res);

    return res?.data?.session?.user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export { login, getUserSession, signup };
