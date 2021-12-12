module.exports = function(application){
    application.get('/', function(req,res){
        application.app.controllers.home.index(application, req, res);
    });

     application.get('/index', function(req,res){
        application.app.controllers.home.index(application, req, res);
    });

    application.post('/publicar/enviar', function(req, res){
		application.app.controllers.home.publicar_enviar(application, req, res);
	});
	application.post('/search', function(req, res){
		application.app.controllers.home.search(application, req, res);
	});

}
