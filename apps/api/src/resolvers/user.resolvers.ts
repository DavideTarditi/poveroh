import prisma from "../core/prisma"

export const userResolver = {
    getUsers: async () => {
        return prisma.user.findMany({
            include: { transactions: false }
        })
    },
    getUser: async ({ id }: { id: string }) => {
        return prisma.user.findUnique({
            where: { id },
            include: { transactions: true }
        })
    }
}
