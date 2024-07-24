const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const BlogContent = mongoose.model('BlogContent', blogSchema);

const createBlog = async (title, description) => {
    try {
        await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await BlogContent.create({
            title: title,
            description: description,
        })
        await data.save();
        return { success: true, message: 'Blog Saved successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const getBlogs = async () => {
    try {
        await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await BlogContent.find();
        return { success: true, message: data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const deleteBlog = async (id) => {
    try {
        await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        await BlogContent.findOneAndDelete({ _id: id });
        const data = await BlogContent.find();
        return { success: true, message: "SuccessFully Deleted" , data : data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const updateBlog = async (id, title, description) => {
    try {
        await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        await BlogContent.findOneAndUpdate({
            _id: id
        }, {
            title: title,
            description: description
        });
        return { success: true, message: "SuccessFully Updated" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const getBlogContent = async (id) => {
    try {
        await mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await BlogContent.findOne({ _id: id });
        return { success: true, message: data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = { createBlog, getBlogs, getBlogContent, updateBlog, deleteBlog }
