const multer = require('multer');
const { diskStorage } = require('multer');
const { extname } = require('path');

const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1, // Aceita apenas um arquivo
  },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  },
};

const upload = multer(multerConfig);
module.exports = upload;
