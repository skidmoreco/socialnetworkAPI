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
        get: timestamp => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}
);
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions,length
})



// Add virtual

// Make model of Thought

module.exports = Thought;
