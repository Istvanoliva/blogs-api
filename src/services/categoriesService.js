const { Category } = require('../database/models');

const categoriesService = {
    addCategory: async (name) => {
        const newCategory = await Category.create({ name });
        return newCategory;
    },
};

module.exports = categoriesService;