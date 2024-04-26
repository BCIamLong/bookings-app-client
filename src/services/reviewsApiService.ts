import axios from 'axios'
import { appConfig } from '@/config'
import Cookies from 'js-cookie'
import { ReviewInput } from '@/interfaces'

const { SERVER_BASE_URL } = appConfig

const addReview = async function (data: ReviewInput, cabinId: string) {
  try {
    const token = Cookies.get('access-token')
    const res = await axios.post(
      `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/reviews`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          // Accept: 'application/json',
          // Origin: 'http://localhost:3009',
        },
      },
    )
    console.log(res)
    return res?.data?.review
  } catch (err) {
    console.log(err)
    throw err
  }
}

export { addReview }
