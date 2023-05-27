const mongoose = require("mongoose")

const users = new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"firstName is required"]
    },
    lastName:{
        type:String,
        require:[true,"lastName is required"]
    },
},{
    timestamps:true
})
module.exports = mongoose.model("users",users)