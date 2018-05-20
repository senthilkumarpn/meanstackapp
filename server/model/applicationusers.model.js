var mongoose = require("mongoose");
var Schema = mongoose.Schema;
module.exports=mongoose.model("applicationusers",new Schema({
    name:String,
    password:String,
    status:Boolean, 
}));