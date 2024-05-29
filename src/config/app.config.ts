console.log(process.env.NODE_ENV)
export default {
  GOOGLE_CLIENt_ID:
    '291632962191-ajj14pb6gqpr9a9q0rmf9c2sqb9bk9kd.apps.googleusercontent.com',
  // GOOGLE_OAUTH_REDIRECT_URL: "http://localhost:3009/api/session/oauth/google",
  GOOGLE_OAUTH_REDIRECT_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://booking-api-ebe1.onrender.com/api/v1/auth/login/oauth/google'
      : 'http://localhost:3009/api/v1/auth/login/oauth/google',
  SERVER_BASE_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://booking-api-ebe1.onrender.com'
      : 'http://localhost:3009',
  CLIENT_BASE_UTL:
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5137',
  PAGE_LIMIT: 6,
}
