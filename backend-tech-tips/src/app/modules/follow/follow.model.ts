import mongoose, { Schema } from "mongoose";
import { IFollow } from "./follow.interface";

const FollowSchema: Schema = new Schema<IFollow>({
    follower: { type: Schema.Types.ObjectId, ref: "User", required: true },
    following: { type: Schema.Types.ObjectId, ref: "User", required: true }
  });

export const Follow =  mongoose.model<IFollow>("Follow", FollowSchema);