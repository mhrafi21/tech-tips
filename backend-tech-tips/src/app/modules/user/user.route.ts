import express from 'express'
import { UserController } from './user.controller'
import { userValidation } from './user.validation'
import validateRequest from '../../middlewares/validateRequest'
import { multerUpload } from '../../config/multer.config'

const router = express.Router()

router.post(
  '/signup',
  multerUpload.single("image"),
  UserController.createUser,
)

router.post('/signin', UserController.loginUser)

router.get('/users', UserController.getAllUser);
router.put("/users/:id", UserController.updateRoleOrStatus);

router.patch("/users/profile", UserController.updateUserProfile);

export const userRouter = router
