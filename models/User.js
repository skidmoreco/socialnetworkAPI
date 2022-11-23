const { Schema, model } = require('mongoose');


const userSchema = new Schema(
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
        match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`, 'This email does not match! Please re-enter another email!']
        
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
}
);
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});


const User = model('user', userSchema);
// userSchema.plugin(uniqueValidator);

module.exports = User;
