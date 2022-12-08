import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

export const router = Router();

const createUser = new CreateUserController();

router.post('/users', createUser.handle);
