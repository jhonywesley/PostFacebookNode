module.exports = function(application){

	application.get('/cadastro', function(req, res){
		application.app.controllers.user.user(application, req, res);
	});

	application.post('/user/salvar', function(req, res){
		application.app.controllers.user.user_salvar(application, req, res);
	});

};
