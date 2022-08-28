import { Router } from 'express';
import { AuthController } from './modules/account/auth/AuthController';
import { CreateUserController } from './modules/users/createUser/createUserController';
import { ShowProductsController } from './modules/products/showProducts/ShowProductsController';
import { ShowProductsByCategoryController } from './modules/products/showProductsByCategory/showProductsByCategoryController';
import { CreateProductController } from './modules/products/createProduct/createProductController';
import { ShowCategoriesController } from './modules/categories/showCategories/ShowCategoriesController';
import { CreateCategoryController } from './modules/categories/createCategory/CreateCategoryController';

import { uploadMiddleware } from './middlewares/upload';

const routes = Router();

const authController = new AuthController();
const createUserController = new CreateUserController(); 

const showProductsController = new ShowProductsController(); 
const showProductsByCategoryController = new ShowProductsByCategoryController(); 
const createProductController = new CreateProductController(); 

const showCategoriesController = new ShowCategoriesController(); 
const createCategoryController = new CreateCategoryController();


routes.post('/login', authController.handle);
routes.post('/users', createUserController.handle);

routes.get('/products', showProductsController.handle);
routes.get('/products/:category', showProductsByCategoryController.handle);
routes.post('/products', uploadMiddleware.single("photo"), createProductController.handle);

routes.get('/categories', showCategoriesController.handle);
routes.post('/categories', uploadMiddleware.single("photo"), createCategoryController.handle);

export { routes };