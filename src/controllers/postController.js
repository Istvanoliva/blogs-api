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
    getPost: async (req, res, next) => {
        const { id } = req.params;
        try {
            const post = await postService.getPost(id);
            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    },
    updatePost: async (req, res, next) => {
        const { title, content } = req.body;
        const { id } = req.params;
        try {
            const updatedPost = await postService.updatePost(id, title, content);
            return res.status(200).json(updatedPost);
        } catch (error) {
            next(error);
        }
    },
    deletePost: async (req, res, next) => {
        const { id } = req.params;
        try {
            await postService.deletePost(id);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = postController;