import { Router } from "express";
import { commentControllers } from "./comment.controller";
import { authUser } from "../Auth/auth";
import { USER_ROLE } from "../user/user.constant";
import { TUserRole } from "../user/user.interface";

const router = Router();

router.post("/", authUser(USER_ROLE.USER as TUserRole), commentControllers.addComment);
router.put("/:commentId", authUser(USER_ROLE.USER as TUserRole), commentControllers.editComment)
router.delete("/:commentId", authUser(USER_ROLE.USER as TUserRole), commentControllers.deleteComment)
export const commentRoutes = router;