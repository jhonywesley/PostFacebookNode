module.exports.user = function(application, req, res){
    res.render('user/cadastro',{validacao:{},user:{}});
}

module.exports.user_salvar = function(application, req, res){
		var user = req.body;
		
		req.assert('nome','Nome é Obrigatorio').notEmpty();
    	req.assert('email',"Email Invalido").isEmail();
    	req.assert('senha',"Deve conter no minimo 8 caracteres").len(8);
    	req.assert('ra',"RA Invalido").notEmpty().len(7);
        req.assert('telefone').custom(isTelefone).withMessage('Telefone Inválido');
        req.assert('cpf').custom(isCpf).withMessage('CPF Inválido');


    	var erros = req.validationErrors();
    	if(erros){
    		res.render('user/cadastro',{validacao: erros,user: user});
    		return;
   		}

		var connection = application.config.dbConnection();
		var userModel = new application.app.models.userModel(connection);

		userModel.salvarUser(user,function(error,result){
			res.render('home/index');
		});
}

function isCpf(cpf){
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false;
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) false;
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) false;
    return true
}
function isTelefone(telefone)
    {
        var regex = new RegExp(/^\(\d{2}\) \d{4,5}-\d{4}$/gi);
        return regex.test(telefone);    
        
    }
