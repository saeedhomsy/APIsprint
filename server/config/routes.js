//you need to require some files here
var catController = require('../category/categoryController.js');
var mobController = require('../mobile/mobileController.js');

module.exports = function (app, express) {

	//=============================================================================
	/*								movie route									 */
	//=============================================================================
	//app.get('/api/movie/getAll', movieController.getAllMovies);

	//here you have to add two more routes

	//=============================================================================
	/*								book route									 */
	//=============================================================================
	//app.post('/api/book/insterbooks', bookController.insertBooks);
	//here you have to add two more routes


	//=============================================================================
	/*								category route									 */
	//=============================================================================
	app.post('/api/categories', catController.insertCategory);
	app.get('/api/categories', catController.getAllCategories);
	app.get('/api/categories/:_id', catController.getCategoryByID);


	//=============================================================================
	/*								mobile route									 */
	//=============================================================================
	app.post('/api/mobiles', mobController.insertMobile);
	app.get('/api/mobiles', mobController.getAllMobiles);
	app.get('/api/mobiles/:_id', mobController.getMobileByID);


};

