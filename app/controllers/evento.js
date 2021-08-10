module.exports.eventos = function(application, req, res){
    var connection = application.config.dbConnection();
    var eventosModel = new application.app.models.eventosModel(connection);

    eventosModel.getEventos(function(error, result){
        res.render('evento/evento', {validacao:{},eventos : result,evento:{}});
    });
}
module.exports.evento_salvar = function(application, req, res){

    var evento = req.body;
    req.assert('nome','Nome é Obrigatorio').notEmpty();
    req.assert('dataInicio',"Data e Obrigatoria").notEmpty();
    req.assert('dataFim',"Data e Obrigatoria").notEmpty();
    if(evento.dataFim != evento.dataInicio){
    req.assert('dataFim',"Data fim deve ser depois da data Inicio").isAfter(evento.dataInicio);
    }
    req.assert('descricao','Descrição deve Conter 10 caracteres').len(10);

    var erros = req.validationErrors();

    if(erros){
    	res.render('evento/evento',{validacao: erros,evento: evento,eventos:{}});
    	return;
    }

    var connection = application.config.dbConnection();
    var eventosModel = new application.app.models.eventosModel(connection);
	eventosModel.salvarEvento(evento,function(error,result){
		res.redirect('/evento');
	});

}
module.exports.excluir = function(application, req, res){
    var eventoId = req.body;
    var connection = application.config.dbConnection();
    var eventosModel = new application.app.models.eventosModel(connection);
    eventosModel.excluir(eventoId.id,function(error,result){
        res.redirect('/evento');
    });
}
