"use strict";
const router = require("express").Router();
const { BlogCategory,BlogPost } = require("../controllers/blog.controller");


//& BLOGCATEGORY
router.route("/categories")
.get(BlogCategory.list)
.post(BlogCategory.create);

router.route("/categories/:categoryId")
  .get(BlogCategory.read)
  .put(BlogCategory.update)
  .patch(BlogCategory.update)
  .delete(BlogCategory.delete);


//& BLOGPOST:
router.route("/posts")
.get(BlogPost.list)
.post(BlogPost.create);

router.route("/posts/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .patch(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
