import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { getGoogleOauthUrl } from "./utils";
import AppLayout from "./layouts/AppLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
