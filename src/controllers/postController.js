const postService = require('../services/postService');

const postController = {
    createPost: async (req, res, next) => {
        const { body, user } = req;
        try {
            const post = await postService.createPost(body, user);
            return res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    },
    getAllPosts: async (_req, res, next) => {
        try {
            const posts = await postService.getAllPosts();
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    },
};

module.exports = postController;