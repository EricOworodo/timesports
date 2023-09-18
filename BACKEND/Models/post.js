const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  heading: { 
    type: String, 
    required: true 
  },

  story: { 
    type: String, 
    required: true 
  },

  image: { 
    type: String, 
     
  },

    createdAt: {
    type: Date,
    default: new Date(),
  },

});


module.exports = mongoose.model("Post", postSchema);