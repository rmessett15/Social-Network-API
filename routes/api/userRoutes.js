const router = require("express").Router();
const { createUser, getUsers, getUser, deleteUser } = require('../../controllers/userController');

router.route('/').post(createUser).get(getUsers)

router.route('/:userId').get(getUser).delete(deleteUser)



module.exports = router;
