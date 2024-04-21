/// <reference types="vite/client" />

import { AxiosError } from "axios";

declare module "axios" {
  export interface AxiosErrorConfig extends AxiosError {
    response: {
      data: {
        message: string;
      };
    };
  }
}
