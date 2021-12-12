module.exports.index = function(application, req, res){
    res.render('home/index');
}

module.exports.publicar_enviar = function(application, req, res){

		var publicar = req.body;

		var connection = application.config.dbConnection();
		var homeModel = new application.app.models.homeModel(connection);

		homeModel.publicarEnviar(req,function(error,result){
			res.render('home/index');
		});
}
module.exports.search = function(application, req, res){

		const config = require('../models/config');
		const apiClient = config.newClient();

		var r=[" "];

		apiClient.get('users/search', {
			q :'nasa',
		    count: 5
		})
		    .then(res => {
		       r=[res[0].screen_name,res[1].screen_name,res[2].screen_name,res[3].screen_name,res[4].screen_name];
		       return r;
		    })
		    .catch(err => {
		        console.error(err);
		    })
		console.log(r);
}