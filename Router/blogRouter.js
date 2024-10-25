const express = require('express');
const { createBlog, getAllPost, deletePost, searchBlog, updatePost } = require('../controller/blogController');
const router = express.Router();

router.post("/posts", createBlog);
router.get("/all-posts",getAllPost);
router.delete("/:id",deletePost);
router.get("/search",searchBlog)
router.put("/post-update/:id",updatePost)
module.exports = router;