import { Schema } from 'mongoose'

export type TPost = {
  title: string
  content: string
  category: string
  image: string
  premium: boolean
  user: Schema.Types.ObjectId
  upvotes: number
  downvotes: number
}
