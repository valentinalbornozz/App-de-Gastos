import { Router } from 'express';
import { getAllUsers, createUser, getUserById } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);



export default router;
