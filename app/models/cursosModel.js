function curso(connection){
	this._connection = connection;
}
curso.prototype.salvarCurso = function(curso, callback){
		this._connection.query('insert into curso set ?', curso,callback);
	}
curso.prototype.getCursos = function(callback){
	this._connection.query('select * from curso ORDER BY idCurso DESC', callback);
}
curso.prototype.excluir = function(curso,callback){
	this._connection.query('delete from curso where idCurso=?',curso,callback);
}
module.exports = function(){

	return curso;
}