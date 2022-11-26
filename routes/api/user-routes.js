const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  // Exported functions from user controller
} = require('../../controllers/user-controller.js');

router
  .route('/')
  .get(getUsers)
  .post(createUser);
// Use exported functions from line 3 to create routes

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router
.route('/users/:userId/friends/:friendId')
.post()



module.exports = router;
