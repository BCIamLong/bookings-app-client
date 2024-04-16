import axios from "axios";
import { appConfig } from "../config";

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

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { login };
