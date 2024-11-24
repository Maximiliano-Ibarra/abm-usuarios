import { Router } from 'express'
const userController = require('../controllers/usersController')

const router = Router()

router.post('/usuarios', userController.createUser);
router.get('/usuarios', userController.getAllUsers);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

export default router