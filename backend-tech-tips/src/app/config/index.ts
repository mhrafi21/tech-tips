import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  Default_pass: process.env.DEFAULT_PASS,
  NODE_ENV: process.env.NODE_DEV,
  default_password: process.env.DEFAULT_PASS,
  JWT_SECRET: process.env.JWT_ACCESS_SECRET,
  PAYMENT_URL: process.env.PAYMENT_URL,
  STORE_ID: process.env.STORE_ID,
  SIGNATURE_KEY: process.env.SIGNATURE_KEY,
  VERIFY_PAYMENT_URL: process.env.VERIFY_PAYMENT_URL,
  API_KEY: process.env.API_KEY,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_SECRET: process.env.API_SECRET,
}
