import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUserSession } from "../features/auth/useUserSession";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, user } = useUserSession();
  //   console.log("ok");
  useEffect(
    function () {
      if (!user && !isLoading) navigate("/login");
    },
    [user, isLoading, navigate],
  );

  if (isLoading) return <Spinner size="big" />;

  return children;
}
