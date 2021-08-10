function user(connection){
	this._connection =connection;
}
user.prototype.salvarUser= function(user,callback){
	this._connection.query('insert into Pessoa set ?', user,callback);
}
module.exports = function(){
	
	return user;
}