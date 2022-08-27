"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var AuthController_1 = require("./modules/account/auth/AuthController");
var multer_1 = __importDefault(require("multer"));
var createUserController_1 = require("./modules/users/createUser/createUserController");
var ShowProductsController_1 = require("./modules/products/showProducts/ShowProductsController");
var createProductController_1 = require("./modules/products/createProduct/createProductController");
var path_1 = __importDefault(require("path"));
var routes = (0, express_1.Router)();
exports.routes = routes;
var authController = new AuthController_1.AuthController();
var createUserController = new createUserController_1.CreateUserController();
var showProductsController = new ShowProductsController_1.ShowProductsController();
var createProductController = new createProductController_1.CreateProductController();
var uploadMiddleware = (0, multer_1["default"])({
    storage: multer_1["default"].diskStorage({
        destination: path_1["default"].resolve(__dirname, '..', 'uploads'),
        filename: function (req, file, cb) {
            var ext = path_1["default"].extname(file.originalname);
            var name = path_1["default"].basename(file.originalname, ext);
            cb(null, "".concat(name, "-").concat(Date.now()).concat(ext));
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
routes["delete"]('/categories/:id', authController.handle);
routes.get('/reviews', authController.handle);
routes.get('/reviews/:id', authController.handle);
routes.post('/reviews', authController.handle);
routes.put('/reviews/:id', authController.handle);
routes["delete"]('/reviews/:id', authController.handle);
//# sourceMappingURL=routes.js.map