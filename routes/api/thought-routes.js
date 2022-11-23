const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  updateThoughts,
  createThought,
  deleteThought,
  
  // Exported functions from thought-controller
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThought)
  .post(createThought);

router
  .route('/:thoughtId')
  .put(updateThoughts)
  .get(getSingleThought)
  .delete(deleteThought)
  



// Use exported functions from line 3 to create routes

module.exports = router;
