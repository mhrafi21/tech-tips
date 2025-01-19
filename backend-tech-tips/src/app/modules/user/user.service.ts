import jwt from 'jsonwebtoken'
import httpStatus from 'http-status'
import { IUser } from './user.interface'
import { User } from './user.model'
import config from '../../config'
import AppError from '../../errors/AppError'
import bcrypt from 'bcrypt'

const createUserIntoDB = async (payload: IUser) => {
  // create a user object
  const { password: userPass, ...userInfo } = payload

  const password = await bcrypt.hash(userPass, 10)

  const isAlreadyRegister = await User.findOne({ email: payload?.email })

  if (!isAlreadyRegister) {
    const result = await User.create({ password, ...userInfo })
    return result
  } else {
    throw new AppError(httpStatus.ALREADY_REPORTED, 'User is already register')
  }
}

const loginUserFromDB = async (payload: IUser) => {
  const result = await User.findOne({ email: payload?.email })

  if (!result) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid email')
  }
  const isPasswordValid = await bcrypt.compare(
    payload.password,
    result.password,
  )

  if (!isPasswordValid) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password')
  }

  // generate token for a login user

  const SignInToken = jwt.sign(
    {
      id: result?._id,
      email: result?.email,
      role: result?.role,
      name: result?.username,
      isVerified: result?.isVerified,
    },
    config.JWT_SECRET as string,
    { expiresIn: '5d' },
  )

  return {
    result,
    token: SignInToken,
  }
}

const getAllUsersFromDB = async () => {
  const result = await User.find({})
    .sort({ createdAt: -1 })
    .select('name role status email')
  return result
}

// update profile

const updateProfileIntoDB = async (id: string, payload: IUser) => {
  const result = await User.findByIdAndUpdate(
    id,
    {
      email: payload?.email,
      username: payload?.username,
      profileImage: payload?.profileImage,
    },
    { new: true },
  )
  return result
}

// get singleProfile

const getSingleProfileFromDB = async (id: string) => {
  const result = await User.findById(id)
    .populate('followers')
    .populate('following')
  return result
}

const updateStatusIntoDB = async (id: string, payload: IUser) => {
  const result = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        role: payload?.role,
        status: payload?.status,
      },
    },
    { new: true },
  ).select('name role status email')

  return result
}


export {
  createUserIntoDB,
  loginUserFromDB,
  getAllUsersFromDB,
  updateStatusIntoDB,
  updateProfileIntoDB,
  getSingleProfileFromDB,

}
