module.exports = function(){


	this.publicarEvento = function(evento){

		var FB = require('fb');

		FB.setAccessToken('EAADZBRdKlIBYBAAHgnaycb2PtZAc3D8wxOXmWfO2XCsmhhCJYEf2y0V12N4ZALhZCgMGTRHjZAdw6213CGAY1Fn5GxK3iLuktFnzfZAGjbZA1MZBTE5kTlkTEpEfyCWyVGSv4efSe4qpmaZAO9ZAfqyILQPx5vO4X20bu5eko3xNaEde2PuLuZBZBaOYnscZAZAl5I9pnbZBuytdhoORwZDZD');
		FB.api(
		    '/evento/salvar',
		    'POST',
		    { "message": "Testing with api" },
		    function (response) {
		        console.log(response);
		    }
		);

	}

	return this;
}