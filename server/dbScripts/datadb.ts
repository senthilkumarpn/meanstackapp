db.employees.drop();
db.createCollection("employees");
db.employees.insert({"Name":"Rajesh","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p1@inatech.com"});
db.employees.insert({"Name":"Kumar","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p2@inatech.com"});
db.employees.insert({"Name":"vinoth","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p3@inatech.com"});
db.employees.insert({"Name":"seenu","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p4@inatech.com"});
db.employees.insert({"Name":"Kumar","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p5@inatech.com"});
db.employees.insert({"Name":"Sen","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p6@inatech.com"});
db.employees.insert({"Name":"dheeban","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p7@inatech.com"});


db.users.drop();
db.createCollection("users");
db.users.insert({"Name":"Rajesh","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p1@inatech.com"});
db.users.insert({"Name":"vinoth","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p3@inatech.com"});
db.users.insert({"Name":"seenu","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p4@inatech.com"});
db.users.insert({"Name":"Kumar","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p5@inatech.com"});
db.users.insert({"Name":"Sen","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p6@inatech.com"});
db.users.insert({"Name":"dheeban","Company":"Inatech","Department":"RD","Branch":"CHENNAI","EmailId":"senthilkumar.p7@inatech.com"});


db.applicationusers.drop();
db.createCollection("applicationusers");
db.applicationusers.insert({"name":"senthilkumar.p","password":"sasa123","status":"A"});
db.applicationusers.insert({"name":"rajesh.r","password":"sasa123","status":"A"});


db.Products.drop();
db.Products.insert({"ProductId":"1","ProductName":"LifeBoy","Price":"10"});
db.Products.insert({"ProductId":"2","ProductName":"Hamam","Price":"20"});
db.Products.insert({"ProductId":"3","ProductName":"Liril","Price":"30"});
db.Products.insert({"ProductId":"4","ProductName":"Roes","Price":"40"});
db.Products.insert({"ProductId":"5","ProductName":"Dettol","Price":"50"});
db.Products.insert({"ProductId":"6","ProductName":"Lux","Price":"60"});


/*
Application user list  
*/
db.Applicationuser.drop();
db.Applicationuser.insert({"name":"senthilkumar.p","password":"sasa@123","status":"A"});
db.Applicationuser.insert({"name":"sentthill","password":"sasa@123","status":"A"});
db.Applicationuser.insert({"name":"seenu.p","password":"sasa@123","status":"A"});

