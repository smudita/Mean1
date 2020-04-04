const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
const Pro = require("./models/product");
const Sched=require("./models/schedule");
const Yoga=require("./models/yoga");
const Lower=require("./models/lower");
const app = express();

mongoose
  .connect(

    "mongodb://127.0.0.1:27017/LoginDb",


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
    "GET, POST, PATCH, DELETE, OPTIONS"   //the http contols that we gonna use
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
    message: "User added successfully"      //201 means all is okay and a new server is created
                                            //plus in json format a key value is being passed(here message)
  });
});
app.post("/api/new-schedules", (req, res, next) => {
  const sched = new Sched({
    day:req.body.day,
    title:req.body.title,
    count:req.body.count,

  });
  sched.save();
  res.status(201).json({
    message: "exercise added successfully"      //201 means all is okay and a new server is created
                                            //plus in json format a key value is being passed(here message)
  });
});


  app.post("/api/posts", (req, res, next) => {
    Post.findOne({email:req.body.email}).then(documents =>{
      if(documents){

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
          })
      }
    });
  });

  app.get("/api/products", (req, res, next) => {
    Pro.find().then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/schedules", (req, res, next) => {
    Sched.find().then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/lowers", (req, res, next) => {
    Lower.find().then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/yogas", (req, res, next) => {
    Yoga.find().then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/products/:_id", (req, res, next) => {
    Pro.findById(req.params._id).then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/yogas/:_id", (req, res, next) => {
    Yoga.findById(req.params._id).then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
    });
  });
  app.get("/api/lowers/:_id", (req, res, next) => {
    Lower.findById(req.params._id).then(documents => {
      res.status(200).json({
        message: "data fetched successfully!",
        prods: documents
      });
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


    app.get("/api/schedules/:day", (req, res, next) => {
      Sched.find({day:req.params.day}).then(documents =>
        {
          res.status(200).json({
            message:"Schedules fetched",
            prods: documents
          });

      });
    });
    app.delete("/api/schedules/:_id", (req, res, next) => {
      Sched.deleteOne({ _id: req.params._id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
      });
    });
    app.put("/api/schedules/:_id", (req, res, next) => {
      const sched = new Sched({
        day:req.body.day,
        title:req.body.title,
        count:req.body.count,

     });
      Sched.updateOne({ _id: req.params._id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });

    });
  });
module.exports = app;
  
   /* , function(err, result)  {
      if (err) {
        res.send(err);
        console.log('no');
      } else {
        res.send(result);
      }
    });
    });




     /*app.post("/api/new-products", (req, res, next) => {
    const products = new Product({
      imagePath: req.body.imagePath,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,

    });
    products.save();
    res.status(201).json({
      message: "User added successfully"      //201 means all is okay and a new server is created
                                              //plus in json format a key value is being passed(here message)
    });
  });*/
  /*app.get("/api/products", (req, res, next) => {
    Pro.find().then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        products: documents
      });
    });
  });*/





