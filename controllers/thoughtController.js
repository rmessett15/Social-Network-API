const { User, Thought } = require("../models");

const thoughtController = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      return res.status(200).json({ message: "Thought successfully deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //   ???????????
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true }
      );

      // ?????
      if (!reaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // ?????

      return res.status(200).json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //   ????????????

  //   ????????????????????????????????????????
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      // ?????
      if (!reaction) {
        return res
          .status(404)
          .json({ message: "Check thought and reaction ID" });
      }
      // ?????

      return res.status(200).json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // ??????????????????????????????????????????
};

module.exports = thoughtController;
