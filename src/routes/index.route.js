const express = require('express');
const route = express.Router();
const { Testing, adminLogIn } = require('../controllers/adminLogIn.controller');
const { blogSubmit, getAllBlogs, getBlogById, blogUpdate, blogDelete } = require('../controllers/blogContent.controller');
const { courseSubmit, getAllCourses, getCourseById, courseUpdate, courseDelete } = require('../controllers/courseContent.controller');

route.get('/', Testing);
route.post('/adminLogIn', adminLogIn);
route.post('/blogSubmit', blogSubmit);
route.get('/getAllBlogs', getAllBlogs);
route.post('/getBlogById', getBlogById);
route.post('/blogUpdate', blogUpdate);
route.delete('/blogDelete', blogDelete);
route.post('/courseSubmit', courseSubmit);
route.get('/getAllCourses', getAllCourses);
route.post('/getCourseById', getCourseById);
route.post('/courseUpdate', courseUpdate);
route.delete('/courseDelete', courseDelete);

module.exports = route;
