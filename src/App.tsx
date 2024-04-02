import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { getGoogleOauthUrl } from "./utils";
import AppLayout from "./layouts/AppLayout";
import Homepage from "./pages/Homepage";
// import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        {/* <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
