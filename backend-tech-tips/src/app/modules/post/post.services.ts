import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TPost } from './post.interface'
import { Post } from './post.model'

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload)
  return result
}

const getPostFromDB = async (payload: Record<string, unknown>) => {

  const { category, sort, search, limit = 10, page = 1 } = payload;

  let searchQuery = {};

  if (category) {
    searchQuery = { category: category }
  }

  // search query;

  if (search) {
    searchQuery = {
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ],
    }
  }

  // let sortUpvoting
  let sortOption = {};
  if (sort) {
    sortOption = { upvotes: sort === "asc" ? 1 : -1 }
  } else {
    sortOption = { createdAt: -1 }  // sort by default in descending order  // if no search and no sort then sort by created date in descending order
  }

  // pagination 

  const limitNum = Number(limit);
  const skipNum = (Number(page) - 1) * Number(limit);

  const count = await Post.countDocuments();
  const totalPages = Math.ceil(Number(count) / Number(limit));

  const result = await Post.find(searchQuery).populate("user").sort(sortOption).limit(limitNum).skip(skipNum);
  return { result, totalPages };
}

// edit post from db

const editPostFromDB = async (id: string, payload: TPost) => {

  try {

    const result = await Post.findByIdAndUpdate(id, payload, { new: true });
    return result;

  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, `You can't post edit ${error}`)
  }
}

// delete post from db

const deletePostFromDB = async (id: string) => {
  try {
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, `Post not found`)
    }
    return result;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, `Post not found ${error}`)
  }
}

// get single user post 
// get single user post 
const getUserPostsFromDB = async (id: string) => {

  try {
    const result = await Post.find({ user: id }).populate("user")
    return result;

  } catch (error) {
    throw new AppError(httpStatus.OK, "Post Not found")
  }

}

export const postServices = {
  createPostIntoDB,
  getPostFromDB,
  getUserPostsFromDB,
  editPostFromDB,
  deletePostFromDB
}
