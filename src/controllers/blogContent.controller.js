const { createBlog, getBlogs ,getBlogContent , updateBlog , deleteBlog} = require('../models/blogContent.model');

async function blogSubmit(req, res) {
    const result = req.body;
    const responseGet = await createBlog(result.title, result.description);
    res.send(responseGet)
}

async function blogUpdate(req, res) {
    const result = req.body;
    const responseGet = await updateBlog(result.id,result.title, result.description);
    res.send(responseGet)
}

async function getAllBlogs(req, res) {
    const responseGet = await getBlogs();
    res.send(responseGet)
}

async function getBlogById(req, res) {
    const result = req.body;
    const responseGet = await getBlogContent(result.id);
    res.send(responseGet)
}

async function blogDelete(req, res) {
    const result = req.body;
    const responseGet = await deleteBlog(result.id);
    res.send(responseGet)
}


module.exports = { blogSubmit, getAllBlogs, getBlogById  , blogUpdate , blogDelete};
