import axios from "axios";

import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import type { SerializedError } from "@reduxjs/toolkit";

interface AxiosBaseQueryProps {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
}

export type BaseQueryFnProps = BaseQueryFn<
  AxiosBaseQueryProps,
  unknown,
  SerializedError
>;

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => ({
    ...config,
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }),
  (error) => Promise.reject(error)
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log(
      `ResponseError: ${JSON.stringify(
        error.response?.data ?? error.response,
        undefined,
        2
      )}`
    );

    return Promise.reject(error);
  }
);

export const axiosBaseQuery = (): BaseQueryFnProps => async (props) => {
  try {
    const result: AxiosResponse = await axiosApiInstance({ ...props });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;

    return {
      error: {
        code: err.response?.status.toString(),
        message:
          typeof err.response?.data === "string"
            ? err.response?.data
            : "We got a internal error, please try again later.",
      },
    };
  }
};

export default axiosApiInstance;
