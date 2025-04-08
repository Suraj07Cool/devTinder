const mongoose  = require("mongoose");
const { min } = require("../validation/userSchema");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 80,
    },
    password: {
        type: String,
        required: true,
        maxlength: 150
      },
    gender:{
        type:String,
        enum: ["male", "female", "other"],
    },
    age:{
        type:Number,
        min: 0,
    },
},{
    timestamps:true,
});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;