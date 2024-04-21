import axios from "axios";
import { appConfig } from "../config";

const { SERVER_BASE_URL } = appConfig;

const getCabins = async function () {
  try {
    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/cabins?limit=6&page=1`,
    );

    console.log(res);
    return res?.data?.data?.cabins;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getCabins };
