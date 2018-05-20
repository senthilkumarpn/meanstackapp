const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');

const mongodbAPI = require("./server/routes/mongodb/mongo.api");
const authentication = require('./server/ad-auth-middleware/ad.auth');

//new
const morgan = require("morgan");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("./config");

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false}));

var originsWhitelist = [
    "http://localhost:4200", 'http://dev2.techoil.com', 'http://dev.techoil.com',  'https://dev2.techoil.com',  'https://dev.techoil.com'
   ];
   var corsOptions = {
     origin: function(origin, callback){
           var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
           callback(null, isWhitelisted);
     },
     credentials:false
   }
app.use(cors(corsOptions));
 

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));



//Authentication
app.use(authentication);
// API location
app.use('/mongodb', mongodbAPI);

app.use(morgan('dev'));
app.set("superSecret",config.secret);

//authendication
/*
app.use((req,res,next)=>{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token,app.get('superSecret'),(err,decoded)=>{
            console.log(err);
            if(err){
                return res.json({success:false,message:'Failed to authenticate'});
            }
            else{
                req.decoded = decoded;
                next();
            }
        })
    }
    else{
        next();
//        return res.status(400).send({success:false,message:'No token Provided'});
    }
})
*/
// API location
mongoose.connect(config.dbconnstring);
app.use('/api', api);

app.get("/",(req,res)=>{
    res.send("The API is at localhost:"+port+"/api");
});
 
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
//const port = process.env.PORT || '3000';
const port = '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));