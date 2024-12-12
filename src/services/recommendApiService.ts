import axios from 'axios'
import { appConfig } from '@/config'

axios.defaults.withCredentials = true

const { SERVER_RECOMMEND_URL } = appConfig

export const getRecommendTours = async function (id: string) {
  try {
    const res = await axios.get(
      `${SERVER_RECOMMEND_URL}/recommend?user_id=${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

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
