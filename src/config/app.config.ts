// console.log(import.meta.env.MODE)
export default {
  GOOGLE_CLIENt_ID:
    '291632962191-ajj14pb6gqpr9a9q0rmf9c2sqb9bk9kd.apps.googleusercontent.com',
  // GOOGLE_OAUTH_REDIRECT_URL: "http://localhost:3009/api/session/oauth/google",
  GOOGLE_OAUTH_REDIRECT_URL:
    import.meta.env.MODE === 'production'
      ? 'https://booking-api-ebe1.onrender.com/api/v1/auth/login/oauth/google'
      : 'http://localhost:3009/api/v1/auth/login/oauth/google',
  SERVER_BASE_URL:
    // 'https://booking-api-ebe1.onrender.com',
    import.meta.env.MODE === 'production'
      ? // ? 'https://booking-api-ebe1.onrender.com'
        'https://tours-booking-api.onrender.com'
      : 'https://tours-booking-api.onrender.com',
  // 'http://localhost:3009',
  SERVER_RECOMMEND_URL: 'http://127.0.0.1:3100',
  CLIENT_BASE_UTL:
    import.meta.env.MODE === 'production'
      ? 'https://bookings-app-client.vercel.app'
      : 'http://localhost:5173',
  PAGE_LIMIT: 6,
  MAP_API_KEY: 'IigiqXGj105kiRYHhgiW',
  TYPES: [
    [
      'group',
      'https://onelifeadventures.com/wp-content/uploads/2019/06/group-tours.jpg',
    ],
    [
      'private',
      'https://travelerwp.com/wp-content/uploads/2023/08/Private-Tour-vs-Group-Tour-Which-is-better-Image-1.jpg',
    ],
    [
      'personal',
      'https://hoiantravel.com.vn/wp-content/uploads/2024/04/my-son-private-tour.jpg',
    ],
  ],
  DIFFICULTY: [
    [
      'easy',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRDnI_YirE9O8db2oRQ6NckBP6uwhpnEs9A&s',
    ],
    [
      'medium',
      'https://vietunique.vn/Uploads/medium_tour-du-lich-ha-noi-phu-quoc-4-ngay-3-dem.jpg',
    ],
    [
      'difficult',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_0cQuyUrU3lBDsovJQHibYxaU2Z94dlXOQ&s',
    ],
  ],
}
