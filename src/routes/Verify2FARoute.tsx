import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUserSession } from "../features/auth/useUserSession";
import { toast } from "react-toastify";


export default function Verify2FARoute({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { isLoading, user, error } = useUserSession();
    //   console.log("ok");
    useEffect(
        function () {
            if ((!user?.enable2FA || user?.verify2FAOtp) && !isLoading) {
                toast.error(
                    "You don't turn on the 2FA feature!"
                );
                navigate(-1);
            }
        },
        [user, isLoading, navigate, error],
    );

    if (isLoading) return <Spinner size="big" />;

    return children;
}
