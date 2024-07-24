const express = require('express');
const route = express.Router();
const { Testing, adminLogIn } = require('../controllers/adminLogIn.controller');
const { blogSubmit, getAllBlogs, getBlogById, blogUpdate, blogDelete } = require('../controllers/blogContent.controller');

route.post('/', Testing);
route.post('/adminLogIn', adminLogIn);
route.post('/blogSubmit', blogSubmit);
route.get('/getAllBlogs', getAllBlogs);
route.post('/getBlogById', getBlogById);
route.post('/blogUpdate', blogUpdate);
route.delete('/blogDelete', blogDelete);

module.exports = route;
