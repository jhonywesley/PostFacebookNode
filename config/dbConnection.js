var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password:'root',
		database:'tcc'
	});
}

module.exports = function(){
	return connMySQL;
}