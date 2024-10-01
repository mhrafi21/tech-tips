import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { followServices } from "./follow.services";

const followUser = catchAsync(async(req,res) =>{ 

    const {id: followingId} = req.params;
    const {id: followerId} = req.user;


    const result =await followServices.followUserIntoDB(followingId as string, followerId as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Following updated',
        data: result,
    })
})
const unFollowUser = catchAsync(async(req,res) =>{ 
    const {id: followingId} = req.params;
    const {id: followerId} = req.user;

    const result =await followServices.unFollowUserIntoDB(followingId as string, followerId as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Following updated',
        data: result,
    })
})


const getFollowers = catchAsync(async(req,res)=> {
    const result = await followServices.getFollowersFromDB(req.params.id as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Followers fetched',
        data: result,
    })
})
const getFollowings = catchAsync(async(req,res)=> {
    const result = await followServices.getFollowingFromDB(req.params.id as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Following fetched',
        data: result,
    })
})


export const followControllers = {
    followUser,
    unFollowUser,
    getFollowers,
    getFollowings
}