module.exports = function(application){

	application.get('/evento', function(req, res){
		application.app.controllers.evento.eventos(application, req, res);
	});
	application.post('/evento/salvar', function(req,res){
        application.app.controllers.evento.evento_salvar(application, req, res);
    });
    application.post('/evento/excluir', function(req,res){
        application.app.controllers.evento.excluir(application, req, res);
    });
};
