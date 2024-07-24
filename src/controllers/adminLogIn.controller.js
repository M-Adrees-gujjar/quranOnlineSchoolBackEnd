
const {createAdmin,findAdmin} = require('../models/adminLogIn.model');

function Testing(req, res) {
    console.log("App is Working....");
    res.send({
        message: "App is working..."
    })
}

async function adminCreate(req, res) {
    let request = req.body;
    let response = await createAdmin(request);
    res.send(response)
}

async function adminLogIn(req, res) {
    let request = req.body;
    let response = await findAdmin(request.email,request.password);
    res.send(response)
}

module.exports = { Testing, adminCreate , adminLogIn };
