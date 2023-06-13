const router = require("express").Router();
const {
  getThoughts,
  getThought,
  createThought,
  deleteThought,
  addReaction,
  deleteReaction,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .delete(deleteThought)
  .put(updateThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

// router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
