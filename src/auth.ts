import { betterAuth } from 'better-auth'
import pkg from 'pg'

const { Pool } = pkg

export const auth = betterAuth({
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  emailAndPassword: {
    enabled: true,
  },
})
