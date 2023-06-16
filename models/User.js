// Imports
const { Schema, model } = require("mongoose");

// User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Increases friend count in User model object when friends are added by a user
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Creates User model with userSchema
const User = model("user", userSchema);

// Exports
module.exports = User;
