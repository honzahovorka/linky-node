/* eslint-disable no-process-env */
import dotenv from 'dotenv'

dotenv.config()

export default {
  development: {
    dialect: 'postgres',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
  },
}
