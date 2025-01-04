import { Request, Response } from 'express';
import prisma from '../core/prisma';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../middleware/auth.middleware';
import useragent from 'useragent';

export class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({
                    message: 'Email and password are required',
                });
                return;
            }

            const user = await prisma.user.findUnique({
                where: req.body,
            });

            if (!user) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }

            const agent = useragent.parse(req.headers['user-agent']);

            const browser = `${agent.family} ${agent.major}`;
            const os = `${agent.os.family} ${agent.os.major}`;

            await prisma.user_login.create({
                data: {
                    device: os,
                    browser: browser,
                    ip: '-',
                    location: '-',
                    user_id: user.id,
                },
            });

            const token: string = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                {
                    expiresIn: '24h',
                }
            );

            res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 });

            res.status(200).json(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'An error occurred during login',
                error: error.message,
            });
        }
    }
}
