var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Isbn: String,
  Titulo: String,
  Autor: String,
  Editorial: String,
  Año: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
