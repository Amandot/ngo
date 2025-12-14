import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create Prisma client with error handling for missing DATABASE_URL
export const prisma = globalForPrisma.prisma ?? (() => {
  try {
    return new PrismaClient()
  } catch (error) {
    console.warn('Prisma client initialization failed:', error)
    // Return a mock client for build time
    return {} as PrismaClient
  }
})()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma