import { Schema, Types } from "mongoose"

export type TCar = {
  name: string
  description: string
  image: string
  category:string
  reviews: number
  color: string
  isElectric: boolean
  location: string
  status: string
  features: string[]
  pricePerHour: number
  isDeleted: boolean
}


export type TPost = {
  images: string[],
  title: string,
  description: string
  user: Types.ObjectId,
  category: string,
  slug: string,

}
