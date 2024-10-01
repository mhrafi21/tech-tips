import { Schema } from 'mongoose'
import { USER_ROLE } from './user.constant'

export type TUser = {
  _id?: string
  id?: string
  name: string
  email: string
  role: 'user' | 'admin'
  password: string
  terms: boolean
  status: 'active' | 'blocked'
  isVerified: boolean
}

// for user type
export interface IUser extends Document {
  _id?: string
  id?: string
  email: string
  password: string
  username: string
  profileImage?: string | undefined
  role: 'user' | 'admin'
  followers: [Schema.Types.ObjectId]
  following: [Schema.Types.ObjectId]
  isVerified: boolean
  terms: boolean
  status: 'active' | 'blocked'
}

export type TUserRole = keyof typeof USER_ROLE
