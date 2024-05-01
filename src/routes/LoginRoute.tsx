import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUserSession } from "../features/auth/useUserSession";
// import { AxiosErrorConfig } from "axios";
// import { toast } from "react-toastify";


export default function LoginRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, user, error } = useUserSession();
  //   console.log("ok");
  useEffect(
    function () {
      if (user && !isLoading) navigate("/");
      // if (error) toast.error(
      //   (error as AxiosErrorConfig)?.response?.data?.message ||
      //   (error as AxiosErrorConfig)?.message,
      // );

    },
    [user, isLoading, navigate, error],
  );

  if (isLoading) return <Spinner size="big" />;

  return children;
}
