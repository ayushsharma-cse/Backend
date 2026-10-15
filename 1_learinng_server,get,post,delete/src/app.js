const express = require("express");

const app = express();

const notes = [];

app.use(express.json());

// POST: Create a note
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully",
  });
});

// GET: Fetch all notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

//deleting the notes
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  res.status(200).json({
    message: "notes deleted successfully",
  });
});

// patch
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "updated success",
  });
});

module.exports = app;
