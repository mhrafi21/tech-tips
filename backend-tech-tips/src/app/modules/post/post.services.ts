import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
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

// get single user post 

const getUserPostsFromDB = async(id : string) => {
 try {
  const result = await Post.find({user:id}).populate("user")
  return result;

 } catch (error) {
  throw new AppError(httpStatus.OK, "Post Not found")
 }

}

export const postServices = {
  createPostIntoDB,
  getPostFromDB,
  getUserPostsFromDB
}
