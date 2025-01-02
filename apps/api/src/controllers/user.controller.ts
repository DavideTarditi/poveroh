import { Request, Response } from 'express';
import prisma from '../core/prisma';

export class UserController {
    static async me(req: Request, res: Response) {
        await prisma.user
            .findUnique({
                where: {
                    email: req.user.email,
                },
                select: {
                    id: true,
                    name: true,
                    surname: true,
                    email: true,
                    created_at: true,
                },
            })
            .then((x) => {
                res.status(200).json(x);
            })
            .catch((x) => {
                res.status(404).json('User not found');
            });
    }

    static async save(req: Request, res: Response) {
        await prisma.user
            .update({
                where: {
                    email: req.user.email,
                },
                data: req.body,
            })
            .then((x) => {
                res.status(200).json(true);
            })
            .catch((x) => {
                res.status(404).json(false);
            });
    }
}
