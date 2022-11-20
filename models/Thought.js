const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');
const { stringify } = require('querystring');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    {
    username: {
        type: String,
        required: true,
    }
    }
},
{
    toJSON: {
        getters: true,
        virtual: true,
    },
    id: false,
}
);

// Add virtual

// Make model of Thought

module.exports = Thought;
