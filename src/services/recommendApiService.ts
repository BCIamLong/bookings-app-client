import axios from 'axios'
import { appConfig } from '@/config'

axios.defaults.withCredentials = true

const { SERVER_RECOMMEND_URL } = appConfig

export const getRecommendTours = async function ({
  userId,
  tourId,
}: {
  tourId: string
  userId: string
}) {
  try {
    let query = axios.get(
      `${SERVER_RECOMMEND_URL}/recommend?user_id=${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (tourId)
      query = axios.get(
        `${SERVER_RECOMMEND_URL}/recommend-tours?tour_id=${tourId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

    const res = await query
    // console.log(res)
    const result = {
      recommendations: res?.data?.recommendations,
      recommendations_core: res?.data?.recommendations_core,
    }
    return result || null
  } catch (err) {
    // console.log(err)
    throw err
  }
}
