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

// Todo list:
// Noticing that when I delete a user their thoughts and reactions aren't deleted...
// Also, why are my thoughts and friends not added into the associated arrays when I hit the get all users route???
// Utils folder???
// Clean up/comment code-base -> add tables in Readme...
// Readme...
