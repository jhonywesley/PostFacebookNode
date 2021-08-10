module.exports = function(application){

	application.get('/curso', function(req, res){
		application.app.controllers.curso.cursos(application, req, res);
	});
	application.post('/curso/salvar', function(req, res){
		application.app.controllers.curso.curso_salvar(application, req, res);

	});
	application.post('/curso/excluir', function(req,res){
        application.app.controllers.curso.excluir(application, req, res);
    });
};