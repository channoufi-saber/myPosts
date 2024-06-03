const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-Width,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    { id: 1, title: "First Post", content: "This is the first post's content" },
    { id: 2, title: "Second Post", content: "This is the Second post's content" },
    { id: 3, title: "Third Post", content: "This is the Third post's content" }

  ];
  res.status(200).json({
    message: "success",
    posts: posts
  })
});



module.exports = app;
