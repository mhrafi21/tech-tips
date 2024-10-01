import { Router } from 'express'

import { userRouter } from '../modules/user/user.route'
import { paymentRoutes } from '../modules/payment/payment.route'
import { postRoutes } from '../modules/post/post.route'
import { followRoutes } from '../modules/follow/follow.route'
import { commentRoutes } from '../modules/comment/comment.route'

const router = Router()

const moduleRoutes = [
  { path: '/auth', route: userRouter },
  { path: '/payment', route: paymentRoutes },
  { path: '/posts', route: postRoutes },
  { path: "/user", route: followRoutes },
  { path: "/comment", route: commentRoutes }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
