import mongoose, { Schema } from 'mongoose'
import { TPost } from './car.interface'


const postSchema = new Schema<TPost>(
  {
    images: [{ type: String }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String },
    slug: { type: String, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    isFeatured: { type: Boolean, required: true, default: false },
    views: { type: Number, required: true, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true },
)

const carModel = mongoose.model<TPost>('Car', postSchema)

export const carModels = { carModel }
