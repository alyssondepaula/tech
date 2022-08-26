import { Router } from 'express';
import { AuthController } from './modules/account/auth/AuthController';


const routes = Router();

const authController = new AuthController();


routes.post('/login', authController.handle);
routes.post('/products', authController.handle);


export { routes };