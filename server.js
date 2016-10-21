var express = require('express');
var app = express();
var mysql      = require('mysql');
var server = require('http').createServer(app);
var path = require('path'),
    fs = require('fs');
//    var bodyParser = require('body-parser');
    var multer = require('multer');
    

GLOBAL.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test2'
});
 connection.connect();
 var port    =   process.env.PORT || 8000;
 
 // get an instance of router
var router = express.Router();
 // apply the routes to our application
 // route middleware that will happen on every request

router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();	
});
app.use('/', router);
app.use(express.static(__dirname + '/public'));
router.get('/', function (req, res) {
  console.log('I received a GET request');
 res.sendFile( __dirname + "/" + "index.html" );

});
//app.use(bodyParser({uploadDir:'/images'}));

router.post('/contactlist', function (req, res) {
        console.log('I received a GET request');
        var data;
        connection.query('SELECT * from users_bd', function(err, rows, fields) {
        if (err) throw err;   
        //connection.end();
        data = JSON.stringify(rows);
         res.send(data);
      });
});
//app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
//    console.log(req.body) // form fields
//    console.log(req.files) // form files
//    res.status(204).end()
//}]);
router.get('/save',function(req,res){
    var users = {name:'manish',blood_group:'O+',image:'some.jpg',phone:'987456210',created:'89546854'};
    connection.query("INSERT into users_bd SET ?",users,function(err,ress){
         if(err) throw err;
        console.log(ress.insertId);
        var lastinser_id = ress.insertId;
         res.send(lastinser_id);
    });
});
router.get('/update',function(req,res){
    var users = ['A+','manish'];
    connection.query("UPDATE users_bd SET users_bd = ? Where name = ?",users,function(err,ress){
         if(err) throw err;         
         res.send('Changed ' + ress.changedRows + ' rows');
    });
});
router.get('/delete/:id',function(req,res){   
    console.log(req.params.id);
    var ids = [req.id];
//    connection.query("DELETE FROM users_bd  WHERE id = ?",ids,function(err,ress){
//         if(err) throw err;         
//         res.send('Changed ' + ress.affectedRows + ' rows');
//    });
res.send('tis row has been deleted: ' + req.id + '!');
});
// route middleware to validate :name
router.param('id', function(req, res, next, id) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing name validations on ' + id);

	// once validation is done save the new item in the req
	req.id = id;       
	// go to the next thing
	next();	
});
// route middleware to validate :name
router.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing name validations on ' + name);

	// once validation is done save the new item in the req
	req.name = name;       
	// go to the next thing
	next();	
});

router.get('/user/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});

server.listen(port,function(){
    console.log('listening at '+port);
});