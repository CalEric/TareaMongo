var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://joserbp:Ohd9REl6RJ2SZGPm@cluster1-ytuib.gcp.mongodb.net/Libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
	var libro = Libro ({
		Isbn: "978-987-612-778-3",
 		Titulo: "Asylum",
 	 	Autor: "Madeleine Roux",
  		Editorial: "V&R Editorial",
  		Año: "2014"
	});

	libro.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevoLibros(){

	var libros =[
	{Isbn:"978-987-612-886-5",Titulo:"The Mist",Autor:"Stephen King",Editorial:"N/A",Año:"2000"},
	{Isbn:"978-987-612-906-0",Titulo:"La conjura de los necios",Autor:"John Kennedy",Editorial:"Anagrama",Año:"2001"},
	{Isbn:"978-607-311-920-7",Titulo:"El señor de las moscas",Autor:"William Golding",Editorial:"Edhasa",Año:"2000"},
	{Isbn:"978-607-720-002-4",Titulo:"Robinson",Autor:"January Marlow",Editorial:"New Directions Publishing",Año:"2003"},
	{Isbn:"84-7720-405-05",Titulo:"El caballero de la armadura oxidada",Autor:"Robert Fisher",Editorial:"Ediciones Obelisco",Año:"2001"},
	{Isbn:"978-968-15-2121-9",Titulo:"Loitering with intent",Autor:"Muriel Spark",Editorial:"New Directions Publishing",Año:"2001"},
	{Isbn:"978-006-236-406-7",Titulo:"Rabia",Autor:"Stephen King",Editorial:"Plaza & Janes Editories",Año:" 1998"},
	{Isbn:"978-987-747-014-7",Titulo:"Pulp Fiction",Autor:"Quentin Tarantino",Editorial:"Miramaz Books",Año:" 1994"},
	{Isbn:"978-987-747-253-0",Titulo:"La naranja mecanica",Autor:"Anthony Burgess",Editorial:"Minotauro Ediciones",Año:" 2003"}
	];

	Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function FindByIbsn(isbn){
	Libro.find({Isbn: isbn},function(err,data){
    console.log(data);
  });
}

function UpdateTituloByIsbn(isbn,nuevoTitulo){
	Libro.findOneAndUpdate({Isbn: isbn} , {'Titulo':nuevoTitulo},function(err,data){
	if (err) {
    console.log(err);
    }
    console.log(data);

  });
}


function main() {
  //nuevoLibro();
  //nuevoLibros();
  FindByIbsn("978-987-747-014-7");
  UpdateTituloByIsbn("978-987-747-014-7","Batman Year One");
}
main();
