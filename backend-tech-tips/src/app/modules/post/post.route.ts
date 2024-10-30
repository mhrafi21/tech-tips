import { Router } from 'express'
import { createPostControllers } from './post.controller'
import { auth, authUser } from '../Auth/auth'
import { USER_ROLE } from '../user/user.constant'
import { TUserRole } from '../user/user.interface'
import { multerUpload } from '../../config/multer.config'

const router = Router()

router.post(
  '/',
  authUser(USER_ROLE.USER as TUserRole),
  multerUpload.single('image'),
  createPostControllers.createPost,
)
router.get(
  '/',
  authUser(USER_ROLE.USER as TUserRole) || auth(USER_ROLE.ADMIN as TUserRole),
  createPostControllers.getPosts,
);

router.get("/:id", authUser(USER_ROLE.USER as TUserRole), createPostControllers.getSingleUserPosts);
router.put("/:postId", authUser(USER_ROLE.USER as TUserRole), multerUpload.single('image'), createPostControllers.editPost);
router.delete("/:postId", authUser(USER_ROLE.USER as TUserRole), multerUpload.single('image'), createPostControllers.deletePost);


export const postRoutes = router
