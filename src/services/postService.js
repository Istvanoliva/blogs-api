const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(config.development);

const postService = {
    createPost: async (body, user) => {
            const { title, content, categoryIds } = body;
            const { data: { id } } = user;

            const result = await sequelize.transaction(async (t) => {
            const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });
            const categories = categoryIds.map((ID) => ({ postId: post.id, categoryId: ID }));
                
            await PostCategory.bulkCreate(categories, { transaction: t });
            return post;
            });
            return result;
    },
};

module.exports = postService;