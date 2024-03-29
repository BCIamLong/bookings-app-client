import { getGoogleOauthUrl } from "./utils";

function App() {
  return (
    <>
      <h1 className="text-red-400">Login</h1>
      <a href={getGoogleOauthUrl()}>Login with google</a>
    </>
  );
}

export default App;
