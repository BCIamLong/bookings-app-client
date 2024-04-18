import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../useLogout";
import Button from "../../../components/Button";

export default function Logout() {
    const { isLoggingOut, logout } = useLogout()
    const logoutHandler = function () {
        logout()
    }
    return <Button type="icon" disabled={isLoggingOut} onClick={logoutHandler}><HiArrowRightOnRectangle /></Button>
}