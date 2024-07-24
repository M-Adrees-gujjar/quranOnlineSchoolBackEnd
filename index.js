const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require('cors');
const route = require('./src/routes/index.route');
const PORT = 80;

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`App is listening on http://localhost:${PORT} `);
    try {
      mongoose
        .connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net/")
        .then((ans) => {
          console.log("Connected...");
        })
        .catch((error) => {
          console.log("Error while Connected : ", error);
        });
    } catch (error) {
      console.log("Error, mongoDB can't start", error);
    }
  } else {
    console.log("Error, server can't start", error);
  }
});
