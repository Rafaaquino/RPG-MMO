
/*Importar o mongodb*/


var mongo = require('mongodb');


var connMongoDb = function(){
	console.log("entrou no mongo");

	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', // endereço do servidor
			27017, //porta de conexao
			{}
		),
		{}
	);
	return db;
}


module.exports = function(){

	return 	connMongoDb;

}