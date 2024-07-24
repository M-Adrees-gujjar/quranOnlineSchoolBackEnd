const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

const createAdmin = async (data) => {
  try {
    await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
    const newAdmin = new Admin({
      email: data.email,
      password: data.password,
    });
    await newAdmin.save();
    return { success: true, message: 'Admin created successfully' };
  } catch (error) {
    if (error.code === 11000) {
      return { success: false, message: 'Email already exists' };
    }
    return { success: false, message: error.message };
  }
};

const findAdmin = async (email, password) => {
    try {
      await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
      const admin = await Admin.findOne({ email , password});
      if (!admin) {
        return { success: false, message: 'Email or Password is Wrong' };
      }
  
      return { success: true, message: 'Login successful' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

module.exports = {createAdmin,findAdmin};
