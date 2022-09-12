const Post = require("./posts.models");

const getPost = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json({ posts });
};

const createPost = async (req, res) => {
  const { title, body, published } = req.body;
  const post = await Post.create({
    title,
    body,
    published,
  });
  res.status(201).json({ post });
};

module.exports = {
  getPost,
  createPost,
};
