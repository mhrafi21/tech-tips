import express from 'express'
import { UserController } from './user.controller'
import { multerUpload } from '../../config/multer.config'

const router = express.Router()

router.post('/signup', UserController.createUser)
router.post('/signin', UserController.loginUser)
router.post(
  '/users/update-profile',
  multerUpload.single('image'),
  UserController.updateProfile,
)
router.get('/users', UserController.getAllUser)
router.get('/users/:id', UserController.getSingleProfile)
router.put('/users/:id', UserController.updateRoleOrStatus)


export const userRouter = router
