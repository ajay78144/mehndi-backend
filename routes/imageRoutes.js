const express = require('express');
const router = express.Router();

const upload = require('../utils/multer');
const {
  uploadImage,
  getImages,
  deleteImage,
} = require('../controllers/imageController');

const auth = require('../middleware/auth');

router.post('/', auth, upload.single('image'), uploadImage); // 🔐
router.delete('/:id', auth, deleteImage); // 🔐
router.get('/', getImages); // public

// APIs
router.post('/', upload.single('image'), uploadImage); // upload
router.get('/', getImages); // get
router.delete('/:id', deleteImage);

module.exports = router;