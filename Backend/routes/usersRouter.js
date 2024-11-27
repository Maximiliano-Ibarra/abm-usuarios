import { Router } from 'express'
import { userController } from '../controllers/usersController.js'
import { authenticate } from '../middlewares/authenticate.js';

const router = Router()

router.post('/login', userController.login);
router.post('/usuarios', userController.createUser);
router.get('/usuarios/:id', userController.getUser);

router.use(authenticate);

router.get('/usuarios', userController.getAllUsers);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

export default router