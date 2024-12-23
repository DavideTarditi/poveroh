import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as process from 'node:process';

export const JWT_SECRET = process.env.JWT;

export class AuthMiddleware {
    static isAuthenticated(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'No token provided' });
            return
        }

        jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            // req.user = user;
            next();
        });
    }
}
