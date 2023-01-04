const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(plm);
module.exports = mongoose.model('User',UserSchema);