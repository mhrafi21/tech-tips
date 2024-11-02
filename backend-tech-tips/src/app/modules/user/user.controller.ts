import {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleProfileFromDB,
  loginUserFromDB,
  updateProfileIntoDB,
  updateStatusIntoDB,
} from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

import { IUser } from './user.interface'
import httpStatus from 'http-status'

const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body as IUser)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  })
})

const loginUser = catchAsync(async (req, res) => {
  const { result, token } = await loginUserFromDB(req.body as IUser)

  if (result === null) {
    return sendResponse(res, {
      success: false,
      statusCode: 200,
      message: 'Invalid email or password',
      data: null,
    })
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    token: token,
  })
})

const getAllUser = catchAsync(async (req, res) => {
  const result = await getAllUsersFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Users',
    data: result,
  })
})

// get user profile with followers and following

const updateRoleOrStatus = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await updateStatusIntoDB(req.params.id as string, payload)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Status updated',
    data: result,
  })
})

const updateProfile = catchAsync(async (req, res) => {
  const image = req.file?.path
  const data = JSON.parse(req.body.data)
  const result = await updateProfileIntoDB(
    data.id as string,
    { profileImage: image, ...data } as IUser,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Profile updated',
    data: result,
  })
})

// getSingle profile

const getSingleProfile = catchAsync(async (req, res) => {
  const result = await getSingleProfileFromDB(req.params.id as string)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Profile',
    data: result,
  })
})

export const UserController = {
  createUser,
  loginUser,
  getAllUser,
  updateRoleOrStatus,
  updateProfile,
  getSingleProfile,
}
