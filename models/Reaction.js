const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: reactionSchema.Schema.Types.ObjectId,
            default: Object,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
  
);

// We only need to make the schema for this one

module.exports = reactionSchema;
