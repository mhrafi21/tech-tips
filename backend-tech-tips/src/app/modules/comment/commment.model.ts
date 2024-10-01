import mongoose, { Schema } from "mongoose";
import { TComment } from "./comment.interface";


const commnetSchema = new Schema<TComment>({
    content: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
}, { timestamps: true });


export const Comment = mongoose.model<TComment>("Comment", commnetSchema);