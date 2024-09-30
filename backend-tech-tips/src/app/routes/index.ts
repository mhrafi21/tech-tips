import { Router } from 'express'

import { carRoutes } from '../modules/car/car.route'
import { userRouter } from '../modules/user/user.route'
import { paymentRoutes } from '../modules/payment/payment.route'

const router = Router()

const moduleRoutes = [
  { path: '/auth', route: userRouter },
  { path: '/post', route: carRoutes },
  {path: "/payment", route: paymentRoutes }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
