const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
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
.route('/:userId/friends/:friendId')
.post(addFriend),

router
.route('/:userId/friends/:friendId')
.delete(removeFriend)



module.exports = router;
