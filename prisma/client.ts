import { PrismaClient } from '@prisma/client'

//creates a single instance of Prisma Client.  Ensures I do not have multiple instances running.
const prismaClientSingleton = () => {
      return new PrismaClient()
    }

    type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>

    const globalForPrisma = globalThis as unknown as {
        prisma: prismaClientSingleton | undefined
    }

    export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma