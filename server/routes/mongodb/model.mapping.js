var Products = require("../../model/products.model");
var User = require("../../model/user.model");
var ApplicationUsers = require("../../model/applicationusers.model");

var ModelMapping = {
    Mapping:function(model){
        switch(model.toLowerCase()){
            case 'products':return Products;
            case 'users': return User;
            case 'applicationusers':return ApplicationUsers;
            default: return null;
        }
    }
}
module.exports = ModelMapping;