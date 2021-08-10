module.exports.cursos = function(application, req, res){
    var connection = application.config.dbConnection();
    var cursosModel = new application.app.models.cursosModel(connection);

    cursosModel.getCursos(function(error, result){
        res.render('curso/curso', { validacao:{},cursos : result,curso:{}});
    });
}
module.exports.curso_salvar = function(application, req, res){

    var curso = req.body;
    req.assert('Evento_idEvento','Id do evento Obrigatorio').notEmpty();
    req.assert('Pessoa_idUsuario','Pessoa é Obrigatorio').notEmpty();
    req.assert('nome','Nome é Obrigatorio').notEmpty();
    req.assert('custo','Custo é Obrigatorio se gratuito infome 0').notEmpty();
    req.assert('tema','Tema é Obrigatorio').notEmpty().len(3);
    req.assert('cargaHoraria','Carga horaria é Obrigatorio').notEmpty();
    req.assert('numeroEtapas','Numero de etapas é Obrigatorio').notEmpty();
    req.assert('dataInicio',"Data é Obrigatoria").notEmpty();
    req.assert('dataFim',"Data é Obrigatoria").notEmpty();
    req.assert('dataFim',"Data Fim tem que vir apos a dataInicio").isAfter(curso.dataInicio);
    req.assert('descricao','Descrição deve Conter 10 caracteres').len(10);

    var erros = req.validationErrors();
    if(erros){
        res.render('curso/curso',{validacao: erros,curso: curso,cursos:{}});
        return;
    }

    var connection = application.config.dbConnection();
    var cursosModel = new application.app.models.cursosModel(connection);

    cursosModel.salvarCurso(curso,function(error,result){
        res.redirect('/curso');
    });

}
module.exports.excluir = function(application, req, res){
    var cursoId = req.body;
    var connection = application.config.dbConnection();
    var cursosModel = new application.app.models.cursosModel(connection);
    cursosModel.excluir(cursoId.id,function(error,result){
        res.redirect('/curso');
    });
}