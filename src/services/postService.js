const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../status');
const { BlogPost, PostCategory, User, Category } = require('../database/models');

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

    getAllPosts: async () => {
        const posts = await BlogPost.findAll({ include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
            },
        ] });
        return posts;
    },
    getPost: async (id) => {
        const idExist = await BlogPost.findByPk(id, { include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
            },
        ] });
        if (!idExist) throw status.noPost;
        return idExist;
    },
    updatePost: async (id, title, content) => {
        await BlogPost.update({ title, content }, { where: { id } });
        const updated = await BlogPost.findByPk(id, { 
            include: [
              { model: User, as: 'user', attributes: { exclude: ['password'] } },
              { model: Category, as: 'categories' },
            ],
          });
          return updated;
    },
    deletePost: (id) => BlogPost.destroy({ where: { id } }),
};

module.exports = postService;