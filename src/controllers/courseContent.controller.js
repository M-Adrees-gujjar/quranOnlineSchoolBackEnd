const { createCourse, getCourses ,getCourseContent , updateCourse , deleteCourse} = require('../models/courseContent.model');

async function courseSubmit(req, res) {
    const result = req.body;
    const responseGet = await createCourse(result.title, result.courseAbout , result.courseContent);
    res.send(responseGet)
}

async function courseUpdate(req, res) {
    const result = req.body;
    const responseGet = await updateCourse(result.id,result.title, result.courseAbout , result.courseContent);
    res.send(responseGet)
}

async function getAllCourses(req, res) {
    const responseGet = await getCourses();
    res.send(responseGet)
}

async function getCourseById(req, res) {
    const result = req.body;
    const responseGet = await getCourseContent(result.id);
    res.send(responseGet)
}

async function courseDelete(req, res) {
    const result = req.body;
    const responseGet = await deleteCourse(result.id);
    res.send(responseGet)
}


module.exports = { courseSubmit, getAllCourses, getCourseById, courseUpdate, courseDelete };
