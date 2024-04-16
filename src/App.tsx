import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoute from "./routes/AppRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
