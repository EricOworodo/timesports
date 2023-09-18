const { Signup, Login, CreatePost, getAllPosts } = require("../Controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post('/signup', Signup)
router.post('/signin', Login)
router.post('/post', CreatePost)
router.get('/posts', getAllPosts)
router.post('/', userVerification)

module.exports = router;