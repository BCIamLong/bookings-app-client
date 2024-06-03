import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./config/i18n.config";
import AppRoute from "./routes/AppRoute";
import DarkModeProvider from "./context/DarkModeContext";
// import { getGoogleOauthUrl } from "./utils";
// import LoginLayout from "./layouts/LoginLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: false
    },
  },
});




function App() {
  return (
    <DarkModeProvider>
      {/* <I18nextProvider i18n={i18n}> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={false}
          pauseOnHover={true}
          transition={Bounce}
          closeButton={true}
          theme="light"
          draggable
        />
        <AppRoute />
      </QueryClientProvider>
      {/* </I18nextProvider> */}
    </DarkModeProvider>
  );
}

export default App;
