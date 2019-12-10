var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	Title: String,
	Descripton: String,
    ISBN: String,
    Author: String
});

module.exports = mongoose.model('book', bookSchema);
