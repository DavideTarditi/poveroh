import { Request, Response } from 'express';
import prisma from '../core/prisma';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../middleware/auth.middleware';

export class AuthController {
    static async login(req: Request, res: Response) {
        const user = await prisma.user.findUnique({
            where: req.body,
        });

        if (user) {
            const token: string = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                {
                    expiresIn: '24h',
                }
            );

            res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 });

            res.status(200).json({});
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}
