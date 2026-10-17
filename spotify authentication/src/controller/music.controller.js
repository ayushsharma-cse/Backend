const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../services/storage.services");

async function createMusic(req, res) {
  const token = req.cookies.token || req.cookies.tokens;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to create a music",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const { title } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "Please upload a music file",
    });
  }

  const result = await uploadFile(file.buffer);

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: decoded.id,
  });

  res.status(201).json({
    message: "music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}

module.exports = { createMusic };
