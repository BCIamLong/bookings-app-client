import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import AppLayout from "../layouts/AppLayout";
import Homepage from "../pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import Verify2FA from "../pages/Verify2FA";
import PageNotFound from "../pages/PageNotFound";
import LoginLayout from "../layouts/LoginLayout";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login/verify-2fa" element={<Verify2FA />}></Route>
        </Route>
        {/* <Route element={<LoginLayout />}>
    <Route path="/login" element={<Login />} />
  </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
