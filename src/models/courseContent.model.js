const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    courseAbout: {
        type: String,
        required: true,
    },
    courseContent: {
        type: String,
        required: true,
    },
});

const CourseContent = mongoose.model('CourseContent', courseSchema);

const createCourse = async (title, courseAbout, courseContent) => {
    try {
        await mongoose
            .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await CourseContent.create({
            title: title,
            courseAbout: courseAbout,
            courseContent: courseContent
        })
        await data.save();
        return { success: true, message: 'Blog Saved successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const getCourses = async () => {
    try {
        await mongoose
            .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await CourseContent.find();
        return { success: true, message: data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const deleteCourse = async (id) => {
    try {
        await mongoose
            .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        await CourseContent.findOneAndDelete({ _id: id });
        const data = await CourseContent.find();
        return { success: true, message: "SuccessFully Deleted", data: data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const updateCourse = async (id, title, courseAbout, courseContent) => {
    try {
        await mongoose
            .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        await CourseContent.findOneAndUpdate({
            _id: id
        }, {
            title: title,
            courseAbout: courseAbout,
            courseContent: courseContent
        });
        return { success: true, message: "SuccessFully Updated" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const getCourseContent = async (id) => {
    try {
        await mongoose
            .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/");
        const data = await CourseContent.findOne({ _id: id });
        return { success: true, message: data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = { createCourse, getCourses, getCourseContent, updateCourse, deleteCourse };
