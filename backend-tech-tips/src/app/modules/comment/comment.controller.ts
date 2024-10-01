import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { commentServices } from "./comment.services";


import { TComment, TEditComment } from "./comment.interface";

const addComment = catchAsync(async(req,res) => {
    const {id: user} = req.user// logged-in user making the comment
    const result = await commentServices.addCommentInfoDB({user, ...req.body} as TComment);

sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment added',
    data: result,
})
})


// edit comment 
const editComment = catchAsync(async(req,res) => {
    const {commentId} = req.params;
    const {content} = req.body;
    const {id: userId} = req.user;

    const commentEdit  = {
        commentId, content, userId
    }

    const result = await commentServices.editCommentFromDB(commentEdit as TEditComment);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comment edited',
        data: result,
    })
});

// delete comment 

const deleteComment = catchAsync(async(req,res) => {
    const {commentId} = req.params;
    const {id: userId} = req.user;

    const result = await commentServices.deleteCommentFromDB(commentId as string, userId as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comment deleted',
        data: result,
    })
});


export const commentControllers = {
    addComment,
    editComment,
    deleteComment
}