// Imports
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// Middleware
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Exports
module.exports = router;
