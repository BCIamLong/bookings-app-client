import { appConfig } from "../config";

const { GOOGLE_OAUTH_REDIRECT_URL, GOOGLE_CLIENt_ID } = appConfig;

export default function () {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const scope =
    "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

  return `${rootUrl}?redirect_uri=${GOOGLE_OAUTH_REDIRECT_URL}&client_id=${GOOGLE_CLIENt_ID}&access_type=offline&response_type=code&prompt=consent&scope=${scope}`;
}
