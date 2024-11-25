import { Router } from 'express'
import { userController } from '../controllers/usersController.js'

const router = Router()

router.post('/usuarios', userController.createUser);
router.get('/usuarios', userController.getAllUsers);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

export default router