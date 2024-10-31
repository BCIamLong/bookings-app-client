import { appConfig } from '@/config'
import { IPostInput, SearchPost } from '@/interfaces'
import { SortOptions } from '@/interfaces/types'
import axios from 'axios'

axios.defaults.withCredentials = true
const { SERVER_BASE_URL, PAGE_LIMIT } = appConfig

const getPosts = async function ({
  sort = 'none',
  page = 1,
  search,
  bookmarkFor = '',
}: {
  sort?: SortOptions
  page?: number
  search?: SearchPost | URLSearchParams
  bookmarkFor?: string
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
    if (bookmarkFor)
      url = `${SERVER_BASE_URL}/api/v1/posts?${sortStr}&limit=${PAGE_LIMIT}&page=${page}&bookmarkFor=${bookmarkFor}`

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

const createPost = async function ({ data }: { data: FormData }) {
  try {
    const res = await axios.post(`${SERVER_BASE_URL}/api/v1/posts`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // console.log(res)
    return res?.data?.data?.post
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const updatePost = async function ({
  id,
  data,
}: {
  id: string
  data: Partial<IPostInput>
}) {
  try {
    let query = axios.patch(`${SERVER_BASE_URL}/api/v1/posts/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (data?.images?.length)
      query = axios.patch(`${SERVER_BASE_URL}/api/v1/posts/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    const res = await query
    // console.log(res)
    return res?.data?.data?.post
  } catch (err) {
    // console.log(err)
    throw err
  }
}

const deletePost = async function ({ id }: { id: string }) {
  try {
    await axios.delete(`${SERVER_BASE_URL}/api/v1/posts/${id}`)
    // console.log(res)
    return null
  } catch (err) {
    // console.log(err)
    throw err
  }
}

export { getPost, createPost, getPosts, updatePost, deletePost }
