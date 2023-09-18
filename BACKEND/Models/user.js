const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
  },

  lastName: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true 
  },

  phone: { 
    type: String, 
    required: true 
  },

  password: { 
    type: String, 
    required: true 
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);