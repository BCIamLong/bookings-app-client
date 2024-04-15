import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { getGoogleOauthUrl } from "./utils";
import AppLayout from "./layouts/AppLayout";
import Homepage from "./pages/Homepage";
// import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        {/* <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
