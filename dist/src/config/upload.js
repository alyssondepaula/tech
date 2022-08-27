"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.uploadConfig = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
exports.uploadConfig = {
    storage: multer_1["default"].diskStorage({
        destination: function (req, file, cb) {
            cb(null, path_1["default"].resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: function (req, file, cb) {
            var ext = path_1["default"].extname(file.originalname);
            var name = path_1["default"].basename(file.originalname, ext);
            cb(null, "".concat(name, "-").concat(Date.now()).concat(ext));
        }
    })
};
//# sourceMappingURL=upload.js.map