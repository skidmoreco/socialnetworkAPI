const { Thought, User } = require('../models');

const thoughtController = {
    getThought(req, res) {
        Thought.find()
        .then((thoughtData) => {
            return res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );
            })
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
            ? res.status(400).json({ message: 'No thought found with that ID' })
            : User.deleteMany({ _id: {$in: thought.thoughts}})
            )
            .then(() => res.json({ message: 'Thought successfully removed!' }))
            .catch((err) => res.status(500).json(err));
    },
    updateThoughts(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No course with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

};

module.exports = thoughtController;
