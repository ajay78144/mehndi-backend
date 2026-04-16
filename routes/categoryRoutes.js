const express = require('express');
const router = express.Router();

const {
  addCategory,
  getCategories,
  deleteCategory,
} = require('../controllers/categoryController');

const auth = require('../middleware/auth');

router.post('/', auth, addCategory);   // 🔐 protected
router.delete('/:id', auth, deleteCategory); // 🔐 protected
router.get('/', getCategories); // public

// APIs
router.post('/', addCategory);        // add
router.get('/', getCategories);       // get all
router.delete('/:id', deleteCategory); // delete

module.exports = router;