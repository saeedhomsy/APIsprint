//you need to require some files here

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.get('/api/movie/getAll', movieController.getAllMovies);
	//here you have to add two more routes
	
//=============================================================================
/*								book route									 */
//=============================================================================
	app.post('/api/book/insterbooks', bookController.insertBooks);
	//here you have to add two more routes

};

