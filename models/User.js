const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new User.Schema(
{
    userName: { 
        type: String, 
        required: true, 
        unique: true, 
        trimmed: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
    },
    thoughts: {
        type: User.Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: User.Scehma.Types.ObjectId,
        ref: 'User'
    },
},
{
    toJSON: {
        virtuals: true,
    }
});



// Add virtual

// Make model of User

const User = model('user', userSchema);
userSchema.plugin(uniqueValidator);

module.exports = User;
