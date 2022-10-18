const {mongoose, Schema} = require("mongoose");

const MessageSchema = new Schema({
    content: {type: String},
}, {timestamps: true} )

module.exports = mongoose.model('Message', MessageSchema)

export {}