import prisma from "../prisma/client"

export const userResolver = {
    getUsers: async () => {
        return prisma.user.findMany({
            include: { transactions: true }
        })
    },
    getUser: async ({ id }: { id: string }) => {
        return prisma.user.findUnique({
            where: { id },
            include: { transactions: true }
        })
    }
}
