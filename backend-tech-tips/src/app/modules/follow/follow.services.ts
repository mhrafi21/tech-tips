import httpStatus from "http-status"
import AppError from "../../errors/AppError"
import { User } from "../user/user.model"
import { Follow } from "./follow.model"

const followUserIntoDB = async (followingId: string, followerId: string) => {

    if (followerId === followingId) {
        throw new AppError(httpStatus.OK, "You can't follow yourself")
    }

    try {

        const targetUser = await User.findById(followingId);

        if (!targetUser) {
            throw new AppError(httpStatus.OK, "User not found")
        }

        // check if already exists

        const existsFollow = await Follow.findOne({ follower: followerId, following: followingId });

        if (existsFollow) {
            throw new AppError(httpStatus.OK, "You are already following this user")
        }

        const result = new Follow({ follower: followerId, following: followingId });

        await result.save();

        return result;

    } catch (error) {
        throw new AppError(httpStatus.OK, "Error following user")
    }

}


const unFollowUserIntoDB = async (followingId: string, followerId: string) => {

    if (followingId === followerId) {
        throw new AppError(httpStatus.OK, "You can't unfollow yourself")
    }

    try {

        const targetUser = await User.findById(followingId);

        if (!targetUser) {
            throw new AppError(httpStatus.OK, "User not found")
        }

        // remove the follow relationship

        const result = await Follow.findOneAndDelete({
            follower: followerId,
            following: followingId
        })

        return result;

    } catch (error) {
        throw new AppError(httpStatus.OK, "Error unfollowing user")
    }


}

const getFollowersFromDB = async(id: string) => {
    const followers = await Follow.find({follower: id}).populate("follower")
    const result = {followers: followers.map(follow => follow.follower)}
    return result;

}

const getFollowingFromDB = async(id: string) => {
     const following = await Follow.find({follower: id}).populate("following");
    const result = {following: following.map(follow => follow.follower)}
    return result;
}

export const followServices = {
    followUserIntoDB,
    unFollowUserIntoDB,
    getFollowersFromDB,
    getFollowingFromDB
}