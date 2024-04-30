import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import Verify2FARoute from "./Verify2FARoute";
import ProfileLayout from "../layouts/ProfileLayout";
import UpdateProfileForm from "../features/users/UpdateProfileForm";
import SettingsLayout from "../layouts/SettingsLayout";
import Account from "../features/auth/Account";
import Security from "../features/auth/Security";
import Enable2FAForm from "../features/auth/Enable2FAForm";
import Cabins from "../pages/Cabins";
import Cabin from "../pages/Cabin";
import BookingSuccess from "../features/bookings/BookingSuccess";
import ReviewsList from "../features/reviews/ReviewsList";
import ProfileInfoLayout from "../layouts/ProfileInfoLayout";
import BookingList from "../features/bookings/BookingsList";
import Bookmarks from "@/pages/Bookmarks";
// import ProfileInfo from "../features/users/ProfileInfo";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AppLayout />}
        >
          <Route path="/profile" element={<ProfileLayout />} >
            <Route index element={<ProfileInfo />} />
            <Route path="edit" element={<UpdateProfileForm />} />
            <Route path="setting" element={<SettingsLayout />}>
              <Route path="account" element={<Account />} />
              <Route path="security" element={<Security />} />
              <Route path="security/setup-2fa" element={<Enable2FAForm />} />
            </Route>
          </Route>
        </Route> */}
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

        </Route>
        <Route element={<AppLayout />}>
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/:id" element={<Cabin />} />
          <Route path="/bookings/success" element={<BookingSuccess />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login/verify-2fa" element={<Verify2FARoute><Verify2FA /></Verify2FARoute>}></Route>
          <Route path="/profile" element={<ProfileLayout />} >
            {/* <Route index element={<ProfileInfo />} /> */}
            <Route index element={<Navigate replace to='reviews' />} />
            <Route element={<ProfileInfoLayout />}>
              <Route path="reviews" element={<ReviewsList isReviewsOfUser={true} />} />
              <Route path="bookings" element={<BookingList />} />
            </Route>
            <Route path="edit" element={<UpdateProfileForm />} />
            <Route path="setting" element={<SettingsLayout />}>
              <Route index element={<Navigate replace to='account' />} />
              <Route path="account" element={<Account />} />
              <Route path="security" element={<Security />} />
              <Route path="security/setup-2fa" element={<Enable2FAForm />} />
            </Route>
          </Route>
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
        {/* <Route element={<LoginLayout />}>
    <Route path="/login" element={<Login />} />
  </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}
