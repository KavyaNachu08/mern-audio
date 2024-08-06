const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
var corsOptions = {
  origin: "http://localhost:3001",
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(Router);

const username = process.env.db_username;
const password = process.env.db_password;
const cluster = process.env.db_cluster;
const dbname = process.env.db_database;

const start = async () => {
  try {
    let url = `mongodb+srv://${username}:${password}@musicshop.0ulau8g.mongodb.net/${dbname}?retryWrites=true&w=majority`;

    await mongoose.connect(url);

    app.listen(3000, () =>
      console.log("Server started on port 3000", username)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
