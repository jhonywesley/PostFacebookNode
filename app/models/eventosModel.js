function evento(connection){
	this._connection = connection;
}
evento.prototype.salvarEvento = function(evento, callback){
	this._connection.query('insert into evento set ?', evento,callback);
}
evento.prototype.getEventoId = function(callback){
	this._connection.query('select idEvento,nome from evento', callback);
}
evento.prototype.getEventos = function(callback){
	this._connection.query('select * from evento ORDER BY idEvento DESC', callback);
}
evento.prototype.excluir = function(evento,callback){
	this._connection.query('delete from evento where idEvento=?',evento,callback);
}
module.exports = function(){


	return evento;
}