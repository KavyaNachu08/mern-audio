const express = require("express");
const { User } = require("./models/user");
const bcrypt = require("bcrypt");

const app = express();
const saltRounds = 10;

app.post("/api/add_user", async (request, response) => {
  const userModal = new User({ ...request.body });
  try {
    const user = await User.findOne({ email: userModal.email });
    if (user) {
      return response.json("Already have an account");
    } else {
      const hashpassword = await bcrypt.hash(userModal.password, saltRounds);
      const hashUser = new User({
        password: hashpassword,
        name: userModal.name,
        email: userModal.email,
      });

      const createdUser = await hashUser.save();
      return response.status(200).json({
        message: "Account successfully created",
        isAccountCreated: true,
      });
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/api/validate_user", async (request, response) => {
  const userModal = new User({ ...request.body });

  try {
    const user = await User.findOne({ email: userModal.email });

    if (user) {
      const isMatched = await bcrypt.compare(userModal.password, user.password);

      if (isMatched) {
        return response.status(200).json({
          message: "User is logged in",
          isLoggedIn: true,
        });
      } else {
        return response.status(200).json({
          message: "Email/password is incorrect",
          isLoggedIn: false,
        });
      }
    } else {
      return response.json("There is no account associated with this email.");
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/users", async (request, response) => {
  const users = await User.find();

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/users/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const userById = await User.findById(id);
    response.status(200).json(userById);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/api/add_product", async (request, response) => {
  const productModel = new Product({...request.body});
})

module.exports = app;
