import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { AuthController } from './modules/account/auth/AuthController';
import { CreateUserController } from './modules/users/createUser/createUserController';
import { ShowProductsController } from './modules/products/showProducts/ShowProductsController';
import { ShowProductsByCategoryController } from './modules/products/showProductsByCategory/showProductsByCategoryController';
import { CreateProductController } from './modules/products/createProduct/createProductController';
import { ShowCategoriesController } from './modules/categories/showCategories/ShowCategoriesController';

const routes = Router();

const authController = new AuthController();
const createUserController = new CreateUserController(); 
const showProductsController = new ShowProductsController(); 
const showProductsByCategoryController = new ShowProductsByCategoryController(); 
const createProductController = new CreateProductController(); 
const showCategoriesController = new ShowCategoriesController(); 

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
routes.get('/products/:category', showProductsByCategoryController.handle);
routes.post('/products', uploadMiddleware.single("photo"), createProductController.handle);

routes.get('/categories', showCategoriesController.handle);

export { routes };