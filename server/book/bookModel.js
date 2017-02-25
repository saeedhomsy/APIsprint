var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	
});

var book = mongoose.model('book', bookSchema);

module.exports = book; 