import { TPost } from './post.interface'
import { Post } from './post.model'

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload)
  return result
}

const getPostFromDB = async () => {
  const result = await Post.find({}).populate("user").sort({ createdAt: -1 })
  return result
}

export const postServices = {
  createPostIntoDB,
  getPostFromDB,
}