"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var bcrypt_1 = require("bcrypt");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var hashPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, bcrypt_1.hash)('password', 10)];
                case 1:
                    hashPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                firstName: 'Tech',
                                lastName: 'Api',
                                email: 'tech@api.com.br',
                                password: hashPassword
                            }
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.category.createMany({
                            data: [
                                { id: 'c1', name: 'Fone de ouvido', photo: 'c1.png' },
                                { id: 'c2', name: 'Carregador', photo: 'c2.png' },
                                { id: 'c3', name: 'Computador', photo: 'c3.png' },
                                { id: 'c4', name: 'Casa Inteligente', photo: 'c4.png' },
                                { id: 'c5', name: 'Acessórios', photo: 'c5.png' },
                                { id: 'c6', name: 'Televisores', photo: 'c6.png' },
                                { id: 'c7', name: 'Projetores', photo: 'c7.png' },
                                { id: 'c8', name: 'Celulares', photo: 'c8.png' }
                            ],
                            skipDuplicates: true
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p1.png', price: '600.00', color: 'Prata', category_id: 'c3' }
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p2.png', price: '600.00', color: 'Preto', category_id: 'c3' }
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p3.png', price: '600.00', color: 'Prata', category_id: 'c3' }
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p4.png', price: '600.00', color: 'Prata', category_id: 'c3' }
                        })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.product.create({
                            data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 + Headphone G300', photo: 'p5.png', price: '600.00', category_id: 'c3' }
                        })];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map