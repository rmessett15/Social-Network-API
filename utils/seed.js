const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thought: [],
    
  },
];

console.log(connection);

// mongoose
//   .connect(connection.db, { useNewUrlParser: true })
//   .catch((err) => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
