import axios from 'axios'
// import Cookies from 'js-cookie'

import { appConfig } from '@/config'

const { SERVER_BASE_URL } = appConfig

const getBookmarks = async function () {
  // const token = Cookies.get('access-token')

  try {
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/auth/me/bookmarks`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    // console.log(res)

    return res?.data?.data?.bookmarks
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const getBookmark = async function (cabinId: string) {
  // const token = Cookies.get('access-token')
  // console.log(cabinId)
  try {
    const res = await axios.get(
      `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/bookmarks`,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    // console.log(res)

    return res?.data?.data?.bookmarks?.[0] || null
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const addBookmark = async function (cabinId: string, data: { link: string }) {
  try {
    // const token = Cookies.get('access-token')
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/bookmarks`,
      data,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    // console.log(res)
    return res?.data?.data?.bookmark
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const deleteBookmark = async function (id: string) {
  // const token = Cookies.get('access-token')

  try {
    const res = await axios.delete(
      `${SERVER_BASE_URL}/api/v1/bookmarks/${id}`,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    // console.log(res)
    return res?.data
  } catch (err) {
    // console.log(err)
    throw err
  }
}

export { getBookmarks, addBookmark, getBookmark, deleteBookmark }
