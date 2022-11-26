const { User, Thought } = require('../models');

//gets all users
const userController = {
    getUsers(req, res) {
        User.find()
        .then((userData) => {
            return res.json(userData)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
//gets user by specific id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
        !user
            ? res.status(400).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

//creating a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
//update existing user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body},
            { runValidators: true, new: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No such user exists' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
 //delete a user   
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user
            ? res.status(400).json({ message: 'No user found with that ID' })
            : Thought.deleteMany(({ _id: {$in: user.thoughts }})
        ))
    },
    
};

module.exports = userController;
