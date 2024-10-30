import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TPost } from './post.interface'
import { postServices } from './post.services'

// create post
const createPost = catchAsync(async (req, res) => {
  const { id } = req.user
  const postImg = req.file?.path || 'No image'
  const dataParse = JSON.parse(req.body.data)
  const result = await postServices.createPostIntoDB({
    user: id,
    image: postImg,
    ...dataParse,
  } as TPost)
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Post created successfully',
    data: result,
  })
})


// edit post 

const editPost = catchAsync(async (req, res) => {

  const { postId } = req.params;

  const postImg = req.file?.path || 'No image'
  const dataParse = req.body.data
  console.log(dataParse);

  const result = await postServices.editPostFromDB(postId as string, {
    image: postImg,
    ...dataParse,
  } as TPost)
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Post updated successfully',
    data: result,
  })
})

const deletePost = catchAsync(async(req,res) => {
  const {postId} = req.params;
  const result = await postServices.deletePostFromDB(postId as string);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Post deleted successfully',
    data: result,
  })
});

// get post from db
const getPosts = catchAsync(async (req, res) => {
  const posts = await postServices.getPostFromDB(req.query as Record<string, undefined>)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Posts fetched successfully',
    data: posts,
  })
})

// get user specific post 
const getSingleUserPosts = catchAsync(async (req, res) => {
  // single data using user id ;
  const { id } = req.params
  const posts = await postServices.getUserPostsFromDB(id as string)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User posts fetched successfully',
    data: posts,
  })
})

export const createPostControllers = {
  createPost,
  getPosts,
  getSingleUserPosts,
  editPost,
  deletePost
}
