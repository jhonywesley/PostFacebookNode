var http = require('http');

var server = http.createServer(function(req, res){

	var pagina = req.url;

	if(pagina == '/eventoform'){
		res.end("<html><body>Evento form Teste</body></html>");
	}else{
		res.end("<html><body>Evento Teste</body></html>");
	}

});
server.listen(3000);