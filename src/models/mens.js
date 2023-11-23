const mongoose = require ("mongoose");
const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Ddate,
        required:true,
        trim:true
    },
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    Country:{
        type:String,
        required:true,
        trim:true
    },
    Score:{
        type:Number,
        required:true,
        unique:true
    },

        event:{
            type:String,
            default: "10000000000"
        },
    

})