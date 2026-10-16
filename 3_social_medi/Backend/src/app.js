const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.services");
const postModel = require("./model/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }); // creating the variable for uploading

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer); // this uploadfile is actuall one which is making the imgae to url

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  return res.status(200).json({
    message: "posts fetched successfully",
    posts,
  });
});

module.exports = app;
