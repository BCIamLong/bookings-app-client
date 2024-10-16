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
}: {
  sort?: SortOptions
  page?: number
  limit?: number
  search?: SearchTour | URLSearchParams
  type?: string
  status?: string
}) {
  try {
    let sortStr = ''
    const typeStr = type === 'none' ? '' : `&type=${type}`
    const statusStr = status === 'none' ? '' : `&status=${status}`

    if (sort === 'latest') sortStr = 'sort=-createdAt'
    if (sort === 'oldest') sortStr = 'sort=createdAt'
    if (sort === 'price-high') sortStr = 'sort=-price'
    if (sort === 'price-low') sortStr = 'sort=price'
    if (sort === 'name-high') sortStr = 'sort=-name'
    if (sort === 'name-low') sortStr = 'sort=name'
    // if (sort === 'none') sortStr = ''

    const searchOptions = new URLSearchParams(
      (search as URLSearchParams) || {},
    ).toString()
    console.log(searchOptions)

    let url = `${SERVER_BASE_URL}/api/v1/tours?${sortStr}${typeStr}${statusStr}&limit=${limit}&page=${page}`
    if (searchOptions)
      url = `${SERVER_BASE_URL}/api/v1/tours?${sortStr}${typeStr}${statusStr}&limit=${limit}&page=${page}&${searchOptions}`
    url = url.replace('?&', '?')
    // console.log(url)

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
