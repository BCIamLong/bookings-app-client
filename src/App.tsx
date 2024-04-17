import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoute from "./routes/AppRoute";
// import { getGoogleOauthUrl } from "./utils";
// import LoginLayout from "./layouts/LoginLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick={false}
        pauseOnHover={false}
        transition={Bounce}
        closeButton={false}
        theme="light"
        draggable
      />

      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
