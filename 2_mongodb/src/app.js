const express = require("express");
const notemodel = require("./models/note.model");

const app = express();
app.use(express.json());

//get
app.post("/notes", async (req, res) => {
  const data = req.body;

  await notemodel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "note created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await notemodel.findOne({
    title: "1 note",
  });

  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await notemodel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "note deleted success",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await notemodel.findOneAndUpdate({ _id: id }, { description: description });

  res.status(200).json({
    message: "uddated successfully",
  });
});

module.exports = app;
