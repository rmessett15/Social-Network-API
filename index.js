const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// ????

// Todo list:
// create route function in controllers folder
// add functionality to routes folder based on functions in controllers folder
// Utils folder???
// Readme
// Use elizabeth as a reference
