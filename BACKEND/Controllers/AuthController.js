const User = require("../Models/user");
const Post = require("../Models/post");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler')



module.exports.Signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ firstName, lastName, email, phone, password, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, user });
    next();
    
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     console.log({user})
     next()
     
  } 
  catch (error) {
    console.error(error);
  }
}

module.exports.CreatePost = async (req, res) => {

  const {
    heading,
    story,
    image
  } = req.body;

  try {
    const createPost = await Post.create({
      heading,
      story,
      image
    })
     
     res.status(200).json({ message: "Post created successfully", success: true, Post });
     
     
  } 
  catch (error) {
    console.error(error);
  }
  
}

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await (await Post.find().select('').lean())
  if(!Post) {
      return res.status(400).json({message: 'No post found'})
  }
  res.json(posts);
console.log({posts})
})