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
// Need to add friend and delete friend within userControllers, and fix deleting a reaction in thoughtControllers...
// Noticing that when I delete a user their thoughts and reactions aren't deleted...
// Should I have returns on all my res.status calls???
// Organize the order of routes in controllers to be the same as the order they appear in routes files...
// Utils folder???
// Clean up/comment code-base -> add tables in Readme...
// Readme...
