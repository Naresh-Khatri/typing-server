const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    email: {
        type: String,
        min: 6,
        max: 255,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", UserSchema)