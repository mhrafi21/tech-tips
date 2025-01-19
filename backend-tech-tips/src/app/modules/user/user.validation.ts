import { z } from 'zod'

const userValidationSchema = z.object({
  body: z.object({
    _id: z.string().optional(),
    id: z.string().optional(),
    email: z.string().email(),
    password: z.string(), // Assuming the password needs to be at least 8 characters
    username: z.string(), // Username with minimum 3 characters
    profileImage: z.string().url().optional(),
    role: z.enum(['user', 'admin']),
    followers: z.array(z.string()), // Assuming ObjectId is a 24-character string
    following: z.array(z.string()), // Same assumption as above
    isVerified: z.boolean().default(false),
    terms: z.boolean(),
    status: z.enum(['active', 'blocked']),
  }),
})

export const userValidation = {
  userValidationSchema,
}
