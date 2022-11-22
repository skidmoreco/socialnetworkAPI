const router = require('express').Router();
const {
  getThought,
  getSingletThought,
  createThought,
  deleteThought,
  addUser,
  removeUser,
  // Exported functions from thought-controller
} = require('../../controllers/thought-controller');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingletThought).delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions')

// Use exported functions from line 3 to create routes

module.exports = router;
