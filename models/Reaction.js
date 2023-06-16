// Imports
const { Schema, Types } = require("mongoose");

// This will not be a model, but rather will be used as the reaction field's sub-document schema in the Thought model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exports
module.exports = reactionSchema;
