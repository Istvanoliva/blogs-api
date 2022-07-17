const { Category } = require('../database/models');

const categoriesService = {
    addCategory: async (name) => {
        const newCategory = await Category.create({ name });
        return newCategory;
    },
    getAllCategories: () => Category.findAll(),
};

module.exports = categoriesService;