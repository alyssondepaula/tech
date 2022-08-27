import { Router } from 'express';
import { AuthController } from './modules/account/auth/AuthController';
import multer from 'multer';
import { uploadConfig } from './config/upload';
import { CreateUserController } from './modules/users/createUser/createUserController';
import { CreateProductUserCase } from './modules/products/createProduct/createProductUserCase'
import { ShowProductsController } from './modules/products/showProducts/ShowProductsController';
import { CreateProductController } from './modules/products/createProduct/createProductController';
import path from 'path';

const routes = Router();

const authController = new AuthController();
const createUserController = new CreateUserController(); 
const showProductsController = new ShowProductsController(); 
const createProductController = new CreateProductController(); 

const uploadMiddleware: multer.Multer = multer({
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', 'uploads'),
        filename: (req, file, cb) => {
 
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)
 
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
 });

routes.post('/login', authController.handle);
routes.post('/users', createUserController.handle);

routes.get('/products', showProductsController.handle);
routes.post('/products', uploadMiddleware.single("photo"), createProductController.handle);

routes.get('/categories', authController.handle);
routes.get('/categories/:id', authController.handle);
routes.post('/categories', authController.handle);
routes.put('/categories/:id', authController.handle);
routes.delete('/categories/:id', authController.handle);

routes.get('/reviews', authController.handle);
routes.get('/reviews/:id', authController.handle);
routes.post('/reviews', authController.handle);
routes.put('/reviews/:id', authController.handle);
routes.delete('/reviews/:id', authController.handle);

export { routes };