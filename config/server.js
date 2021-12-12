var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var https = require('https');


var app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;