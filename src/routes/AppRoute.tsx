import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import { AnimatePresence } from "framer-motion";

import LoginRoute from "./LoginRoute";
import ProtectedRoute from "./ProtectedRoute";
import Verify2FARoute from "./Verify2FARoute";


import Spinner from "@/components/Spinner";

import Account from "../features/auth/Account";
import Security from "../features/auth/Security";
import Enable2FAForm from "../features/auth/Enable2FAForm";
import UpdateProfileForm from "../features/users/UpdateProfileForm";
import BookingSuccess from "../features/bookings/BookingSuccess";
import ReviewsList from "../features/reviews/ReviewsList";
import BookingList from "../features/bookings/BookingsList";
import HomeLayout from "@/layouts/HomeLayout";
import Tours from "@/pages/Tours";
import Tour from "@/pages/Tour";
// import Posts from "@/pages/Posts";
import PostsLayout from "@/layouts/PostsLayout";
import PostsList from "@/features/Posts/PostsList";
import CreatePost from "@/features/Posts/CreatPost";
import PostDetail from "@/features/Posts/PostDetail";
import ExplorePosts from "@/features/Posts/ExplorePosts";
import EditPost from "@/features/Posts/EditPost";
import SavedPosts from "@/features/Posts/SavedPosts";

// const Account = lazy(() => import("../features/auth/Account"))
// const Security = lazy(() => import("../features/auth/Security"))
// const Enable2FAForm = lazy(() => import("../features/auth/Enable2FAForm"))
// const UpdateProfileForm = lazy(() => import("../features/users/UpdateProfileForm"))
// const BookingSuccess = lazy(() => import("../features/bookings/BookingSuccess"))
// const ReviewsList = lazy(() => import("../features/reviews/ReviewsList"))
// const BookingList = lazy(() => import("../features/bookings/BookingsList"))


const AppLayout = lazy(() => import("../layouts/AppLayout"))
const LoginLayout = lazy(() => import("../layouts/LoginLayout"))
const ProfileLayout = lazy(() => import("../layouts/ProfileLayout"))
const SettingsLayout = lazy(() => import("../layouts/SettingsLayout"))
const ProfileInfoLayout = lazy(() => import("../layouts/ProfileInfoLayout"))

const Login = lazy(() => import("../pages/Login"))
const SignUp = lazy(() => import("../pages/SignUp"))
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"))
const ResetPassword = lazy(() => import("../pages/ResetPassword"))
const Homepage = lazy(() => import("../pages/Homepage"))
const Verify2FA = lazy(() => import("../pages/Verify2FA"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const Cabins = lazy(() => import("../pages/Cabins"))
const Cabin = lazy(() => import("../pages/Cabin"))
const Bookmarks = lazy(() => import("../pages/Bookmarks"))
const Contact = lazy(() => import("../pages/Contact"))
const About = lazy(() => import("../pages/About"))






// import AppLayout from "../layouts/AppLayout";
// import LoginLayout from "../layouts/LoginLayout";
// import ProfileLayout from "../layouts/ProfileLayout";
// import SettingsLayout from "../layouts/SettingsLayout";
// import ProfileInfoLayout from "../layouts/ProfileInfoLayout";

// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
// import ForgotPassword from "../pages/ForgotPassword";
// import ResetPassword from "../pages/ResetPassword";
// import Homepage from "../pages/Homepage";
// import Verify2FA from "../pages/Verify2FA";
// import PageNotFound from "../pages/PageNotFound";
// import Cabins from "../pages/Cabins";
// import Cabin from "../pages/Cabin";
// import Bookmarks from "@/pages/Bookmarks";
// import Contact from "@/pages/Contact";
// import About from "@/pages/About";
// import ProfileInfo from "../features/users/ProfileInfo";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner size="big" />}>
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
          <Route element={
            <LoginRoute>
              <LoginLayout />
            </LoginRoute>
          }>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

          </Route>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Homepage />}></Route>
          </Route>
          <Route element={<AppLayout />}>
            <Route path="posts" element={<PostsLayout />} >
              <Route index element={<PostsList />} />
              <Route path="create" element={<CreatePost />} />
              <Route path="edit" element={<EditPost />} />
              <Route path=":id" element={<PostDetail />} />
              <Route path="explore" element={<ExplorePosts />} />
              <Route path="saved" element={<SavedPosts />} />
            </Route>
            {/* <Route path="/posts" element={<Posts />} /> */}
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<Tour />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/cabins/:id" element={<Cabin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/bookings/success" element={<BookingSuccess />} />
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
      </Suspense>
    </BrowserRouter >
  );
}
