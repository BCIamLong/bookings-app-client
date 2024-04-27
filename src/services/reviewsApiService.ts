import axios from 'axios'
import { appConfig } from '@/config'
import Cookies from 'js-cookie'
import { ReviewInput } from '@/interfaces'

const { SERVER_BASE_URL } = appConfig

const getReviews = async function ({
  cabinId,
  userId,
  isReviewsOfUser,
}: {
  cabinId: string
  userId?: string
  isReviewsOfUser?: boolean
}) {
  try {
    let url = `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/reviews`
    if (userId && !isReviewsOfUser)
      url = `${SERVER_BASE_URL}/api/v1/cabins/${cabinId}/reviews?user=${userId}`
    if (isReviewsOfUser) url = `${SERVER_BASE_URL}/api/v1/auth/me/reviews`

    const token = Cookies.get('access-token')
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(res)
    return res?.data?.data?.reviews
  } catch (err) {
    console.log(err)
    throw err
  }
}

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
    return res?.data?.data?.review
  } catch (err) {
    console.log(err)
    throw err
  }
}

const editReview = async function (id: string, data: Partial<ReviewInput>) {
  const token = Cookies.get('access-token')

  try {
    const res = await axios.patch(
      `${SERVER_BASE_URL}/api/v1/reviews/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(res)

    return res?.data?.data?.review
  } catch (err) {
    console.log(err)
    throw err
  }
}

const deleteReview = async function (id: string) {
  const token = Cookies.get('access-token')

  try {
    const res = await axios.delete(`${SERVER_BASE_URL}/api/v1/reviews/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res)

    return res?.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export { getReviews, addReview, editReview, deleteReview }
