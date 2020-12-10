module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogo.jogo(application, req, res);
	});

	application.get('/sudito', function(req, res){
		application.app.controllers.jogo.sudito(application, req, res);
	});

	application.get('/pergaminho', function(req, res){
		application.app.controllers.jogo.pergaminho(application, req, res);
	});

	application.get('/sair', function(req, res){
		application.app.controllers.jogo.sair(application, req, res);
	});
}