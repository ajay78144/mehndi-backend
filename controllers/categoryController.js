const Category = require('../models/Category');

// ➕ ADD CATEGORY
exports.addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const category = new Category({ name, image });
    await category.save();

    res.json({ message: 'Category Added', category });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 GET ALL CATEGORIES
exports.getCategories = async (req, res) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ DELETE CATEGORY
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};