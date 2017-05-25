const express = require("express");
const multer = require("multer")({dest: "data/"});
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", multer.single("file"), (req, res) => {
    if (req.file){
        res.send({size: req.file.size});
    } else {
        res.send({error: "no file submitted"});
    }
});

app.listen(app.get("port"), () => {
    console.log(`Connected to port ${app.get("port")}.`);
});
