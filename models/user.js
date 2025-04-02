const mongoose  = require("mongoose");
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
    },
    password: {
        type: String,
        required: true,
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