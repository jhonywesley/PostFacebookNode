var app = require('./config/server');

//var rotaFormEvento = require('./app/routes/form_evento')(app);

//var rotaHome = require('./app/routes/home')(app);

app.listen(3000, function(){
	console.log("Servidor ON");
});