const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    //"mongodb+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular?retryWrites=true"
    "mongodb://127.0.0.1:27017/LoginDb"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/new-posts", (req, res, next) => {
  const post = new Post({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    joindate: req.body.joindate,
    password: req.body.password,
   phoneno: req.body.phoneno,
   email: req.body.email

  });
  post.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});
  app.post("/api/new-posts", (req, res, next) => {
    Post.findOne({email:req.body.email}).then(documents =>{
      if(doucments){


          if(documents.password==req.body.password){
            res.status(200).json({
              message:1
            });
          }
          else{
            res.status(200).json({
              message:0
            });
        }
      }
        else{
          res.status(200).json({
            message:0
          });
      }
    });
  });




app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;
