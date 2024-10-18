import axios from 'axios'
import { appConfig } from '../config'
import { SortOptions } from '../interfaces/types'
import { SearchTour } from '@/interfaces'

axios.defaults.withCredentials = true
const { SERVER_BASE_URL, PAGE_LIMIT } = appConfig

const getTours = async function ({
  sort = 'none',
  page = 1,
  limit = PAGE_LIMIT,
  search,
  type = 'none',
  status = 'none',
  date = 'none',
  difficulty = 'none',
}: {
  sort?: SortOptions
  page?: number
  limit?: number
  search?: SearchTour | URLSearchParams
  type?: string
  status?: string
  date?: string
  difficulty?: string
}) {
  try {
    let sortStr = ''
    const typeStr = type === 'none' ? '' : `&type=${type}`
    const difficultyStr =
      difficulty === 'none' ? '' : `&difficulty=${difficulty}`
    const dateStr = date === 'none' ? '' : `&date=${date}`
    let statusStr = ''

    if (sort === 'latest') sortStr = 'sort=-createdAt'
    if (sort === 'oldest') sortStr = 'sort=createdAt'
    if (sort === 'price-high') sortStr = 'sort=-price'
    if (sort === 'price-low') sortStr = 'sort=price'
    if (sort === 'name-high') sortStr = 'sort=-name'
    if (sort === 'name-low') sortStr = 'sort=name'
    // if (sort === 'none') sortStr = ''

    if (status === 'popular') statusStr = '&sort=-ratingsQuantity'
    if (status === 'trending')
      statusStr = '&sort=-ratingsQuantity&sort=-ratingsAverage'
    if (status === 'most-discount') statusStr = '&sort=-ratingsQuantity'

    console.log(search)
    const searchOptions = new URLSearchParams(
      (search as URLSearchParams) || {},
    ).toString()
    console.log(searchOptions)

    let url = `${SERVER_BASE_URL}/api/v1/tours?${sortStr}${typeStr}${difficultyStr}${statusStr}${dateStr}&limit=${limit}&page=${page}`
    if (searchOptions)
      url = `${SERVER_BASE_URL}/api/v1/tours?${sortStr}${typeStr}${difficultyStr}${statusStr}${dateStr}&limit=${limit}&page=${page}&${searchOptions}`
    url = url.replace('?&', '?')
    console.log(statusStr)
    console.log(url)

    // console.log(url)
    const res = await axios.get(url)

    // console.log(res)
    return { tours: res?.data?.data?.tours, count: res?.data?.count }
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const getTour = async function (id: string) {
  try {
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/tours/${id}`, {})
    // console.log(res)
    return res?.data?.data?.tour
  } catch (err) {
    // console.log(err)
    throw err
  }
}

export { getTours, getTour }
