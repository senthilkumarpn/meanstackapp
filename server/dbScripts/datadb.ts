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


db.users.drop();
db.createCollection("applicationusers");
db.applicationusers.insert({"name":"senthilkumar.p","password":"sasa123","status":"A"});
db.applicationusers.insert({"name":"rajesh.r","password":"sasa123","status":"A"});


/*
Application user list  
*/
db.applicationuser