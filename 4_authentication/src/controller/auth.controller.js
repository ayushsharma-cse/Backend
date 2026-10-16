const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email }); // checking

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "user already exist",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  // now creating the token that will be sent by server to each user when he gets registered
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("mama", token); //saving this above token in the (cookie storage) not in the database

  res.status(201).json({
    message: "user registered success",
    user,
  });
}

module.exports = { registerUser };
