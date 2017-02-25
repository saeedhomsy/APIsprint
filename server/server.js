//require express and mongoose here
var express = require('express');
var mongoose = require('mongoose');

var app = express();

//require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//=============================================================================
/*									Database								 */
//=============================================================================


//here you will have to connect to your mongo database, 
mongoose.connect('mongodb://localhost/kickoutdb', function (err) {
	if (err) {
		console.log(err);
	}
	console.log('connect to mongodb');
});

//set the port number and console log something so that 
var port = process.env.PORT || 8888;

//you know that the mongodb is connected

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.listen(port, function () {
	console.log('listen for port ' + port)
})



module.exports = app;