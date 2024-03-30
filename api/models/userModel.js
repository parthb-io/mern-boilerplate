import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },

    firstName:{
        type: String,
        required:true,
    },

    lastname:{
        type: String,
        required:true,
    },

    gender:{
        type: String,
        required:true,
    },

    followers:{
        type: Number,
        min: 1,
        max: 5
    },

    email:{
        type: String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        minLength: 8,
    },

    joinDate: {
        type: Number,
        required: true
    },


},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;