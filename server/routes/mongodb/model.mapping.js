var Products = require("../../model/products.model");
var User = require("../../model/user.model");

var ModelMapping = {
    Mapping:function(model){
        switch(model.toLowerCase()){
            case 'products':return Products;
            case 'users': return User;
            default: return null;
        }
    }
}
module.exports = ModelMapping;