import { appConfig } from '@/config'
import { SearchPost } from '@/interfaces'
import { SortOptions } from '@/interfaces/types'
import axios from 'axios'

axios.defaults.withCredentials = true
const { SERVER_BASE_URL, PAGE_LIMIT } = appConfig

const getPosts = async function ({
  sort = 'none',
  page = 1,
  search,
}: {
  sort?: SortOptions
  page?: number
  search?: SearchPost | URLSearchParams
}) {
  try {
    let sortStr = ''

    if (sort === 'latest') sortStr = 'sort=-createdAt'
    if (sort === 'oldest') sortStr = 'sort=createdAt'
    if (sort === 'price-high') sortStr = 'sort=-regularPrice'
    if (sort === 'price-low') sortStr = 'sort=regularPrice'
    if (sort === 'name-high') sortStr = 'sort=-name'
    if (sort === 'name-low') sortStr = 'sort=name'

    const searchOptions = new URLSearchParams(
      (search as URLSearchParams) || {},
    ).toString()

    let url = `${SERVER_BASE_URL}/api/v1/posts?${sortStr}&limit=${PAGE_LIMIT}&page=${page}`
    if (searchOptions)
      url = `${SERVER_BASE_URL}/api/v1/posts?${sortStr}&limit=${PAGE_LIMIT}&page=${page}&${searchOptions}`
    url = url.replace('?&', '?')

    // console.log(url)
    const res = await axios.get(url)

    // console.log(res)
    return { posts: res?.data?.data?.posts, count: res?.data?.count }
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const getPost = async function (id: string) {
  try {
    const res = await axios.get(`${SERVER_BASE_URL}/api/v1/posts/${id}`, {})
    // console.log(res)
    return res?.data?.data?.post
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const createPost = async function () {}

export { getPost, createPost, getPosts }
