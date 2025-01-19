import { Schema } from "mongoose"

export type TComment = {
    content: string,
    user: Schema.Types.ObjectId,
    post: Schema.Types.ObjectId,
    replies?: Schema.Types.ObjectId
}

export type TEditComment = {
    commentId: string,
    content: string,
    userId: string,
}