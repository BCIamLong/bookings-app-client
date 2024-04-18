import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUserSession } from "../features/auth/useUserSession";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, user, error } = useUserSession();
  //   console.log("ok");
  useEffect(
    function () {
      console.log("ok");
      if (!user && !isLoading) {
        toast.error(
          (error as AxiosError<ErrorResponse>)?.response?.data?.message ||
          (error as AxiosError<ErrorResponse>)?.message,
        );
        navigate("/login");
      }
    },
    [user, isLoading, navigate, error],
  );

  if (isLoading) return <Spinner size="big" />;

  return children;
}
