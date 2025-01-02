import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { AuthMiddleware } from '../middleware/auth.middleware';

const router: Router = Router();

router.post('/me', AuthMiddleware.isAuthenticated, UserController.me);
router.post('/save', AuthMiddleware.isAuthenticated, UserController.save);

export default router;
