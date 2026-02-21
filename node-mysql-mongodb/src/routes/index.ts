import { Router } from 'express';
import { homeController } from '../controllers/homeController';

const router = Router();

router.get('/', homeController.welcome);
router.get('/health', homeController.healthCheck);

export default router;
