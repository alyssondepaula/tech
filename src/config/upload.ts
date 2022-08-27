import multer from "multer"
import path from "path"

export const uploadConfig = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'uploads'))
        },
        filename: (req, file, cb) => {

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)

            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}