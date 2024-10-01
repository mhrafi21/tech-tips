import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Post } from "../post/post.model";
import { Comment } from "./commment.model";
import { TComment, TEditComment } from "./comment.interface";



// add comment
const addCommentInfoDB = async (payload: TComment) => {
    const { user: userId, post: postId, content } = payload;
    console.log(postId);

    try {

        const post = await Post.findById(postId);

        if (!post) {
            throw new AppError(httpStatus.NOT_FOUND, "Post not found")
        }

        const result = new Comment({
            user: userId,
            post: postId,
            content
        })

        result.save();

        return result;

    } catch (error) {
        throw new AppError(httpStatus.OK, `error added comment, ${error}`)
    }

}

const editCommentFromDB = async (payload: TEditComment) => {

    const { commentId, content, userId } = payload;

    const comment = await Comment.findById(commentId);

    if (!comment) {
        throw new AppError(httpStatus.NOT_FOUND, "Comment not found")
    }

    if (comment.user?.toString() !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, "You can't edit this comment")
    }

    comment.content = content;
    await comment.save();
    return comment;
}

// delete comment 

const deleteCommentFromDB = async (commnentId: string, userId: string) => {

    try {
        const comment = await Comment.findById(commnentId);

    if (!comment) {
        throw new AppError(httpStatus.NOT_FOUND, "Commnet not found!")
    }

    if (comment.user?.toString() !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, "You can't delete this comment!")
    }

    const result = await Comment.findByIdAndDelete(commnentId);
    return result;
    } catch (error) {
        throw new AppError(httpStatus.NOT_FOUND, `comment not found! ${error}`)
    }

}

export const commentServices = {
    addCommentInfoDB,
    editCommentFromDB,
    deleteCommentFromDB
}