import mongoose, { Schema } from 'mongoose'
import { TPost } from './post.interface'

const postSchema = new Schema<TPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    premium: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export const Post = mongoose.model<TPost>('Post', postSchema)
