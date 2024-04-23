import axios from "axios";
import { appConfig } from "../config";
import { SortOptions } from "../interfaces/types";

const { SERVER_BASE_URL, PAGE_LIMIT } = appConfig;

const getCabins = async function ({
  sort = "none",
  page = 1,
}: {
  sort?: SortOptions;
  page?: number;
}) {
  try {
    let sortStr = "";

    if (sort === "latest") sortStr = "sort=-createdAt";
    if (sort === "oldest") sortStr = "sort=createdAt";
    if (sort === "price-high") sortStr = "sort=-regularPrice";
    if (sort === "price-low") sortStr = "sort=regularPrice";
    if (sort === "name-high") sortStr = "sort=-name";
    if (sort === "name-low") sortStr = "sort=name";

    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/cabins?${sortStr}&limit=${PAGE_LIMIT}&page=${page}`,
    );

    console.log(res);
    return { cabins: res?.data?.data?.cabins, count: res?.data?.count };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getCabin = async function (id: string) {
  try {
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/cabins/${id}`, {});
    console.log(res);
    return res?.data?.data?.cabin;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getCabins, getCabin };
