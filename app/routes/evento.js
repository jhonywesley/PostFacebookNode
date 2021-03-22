module.exports = function(app){

	app.get('/formevento', function(req, res){
		res.render('evento/formevento');
	});
	app.post('/evento/salvar', function(req, res){
		var evento = req.body;
		res.send(evento);

		var FB = require('fb');

		FB.setAccessToken('EAADZBRdKlIBYBAFPajpICCL9wzR8zTZCy7YJ45AZBbGPZCzQkzLucOhTN0v6nQi2Yhwaz5eQ1mzFWOZBEFLk7agccoUwGrpZAwFn3AHx7g3aNr4rgjlMrN4PThX4JAq8LRtjcwKckddqegRUm8jY6pzPSgmUKFRUwY7Xfq8pyJ9wJzSpGcBGZA5Icus5XnfhbP2hZCLNMgRnQAZDZD');
		FB.api(
		    '/105962938242264/feed',
		    'POST',
		    { "message": "Evento sobre games realizado dia 10/03" },
		    function (response) {
		        console.log(response);
		    }
		);
	});
};
