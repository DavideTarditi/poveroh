import prisma from '../core/prisma';

export const userResolver = {
    login: async ({ email, password }) => {
        return prisma.user.findUnique({
            where: {
                email: email,
                password: password,
            },
        });
    },
};
