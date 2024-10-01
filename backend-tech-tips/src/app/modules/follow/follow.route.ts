import { Router } from "express";
import { followControllers } from "./follow.controller";
import { authUser } from "../Auth/auth";
import { USER_ROLE } from "../user/user.constant";
import { TUserRole } from "../user/user.interface";

const router = Router();

router.post("/:id/follow", authUser(USER_ROLE.USER as TUserRole), followControllers.followUser);
router.post("/:id/unfollow",authUser(USER_ROLE.USER as TUserRole), followControllers.unFollowUser);
router.get("/:id/followers", followControllers.getFollowers)
router.get("/:id/followings", followControllers.getFollowings)

export const followRoutes = router;