import axios from "axios";
import { appConfig } from "../config";
import { SortOptions } from "../interfaces/types";

const { SERVER_BASE_URL } = appConfig;

const getCabins = async function ({ sort = "none" }: { sort?: SortOptions }) {
  try {
    let sortStr = "";

    if (sort === "latest") sortStr = "sort=-createdAt";
    if (sort === "oldest") sortStr = "sort=createdAt";
    if (sort === "price-high") sortStr = "sort=-regularPrice";
    if (sort === "price-low") sortStr = "sort=regularPrice";
    if (sort === "name-high") sortStr = "sort=-name";
    if (sort === "name-low") sortStr = "sort=name";

    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/cabins?${sortStr}&limit=6&page=1`,
    );

    console.log(res);
    return res?.data?.data?.cabins;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getCabins };
