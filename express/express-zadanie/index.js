const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/express-zadanie");

const User = require("./app/models/UserModel");

const userController = require("./app/controllers/userController");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/users", async function (req, res) {
    User.find()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get("/", userController.index);

app.listen(8080, function () {
    console.log("Server działa");
});
