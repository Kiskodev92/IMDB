"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require('fs');
var peli1 = new movie_1.Movie("Hercules", 1999, "griega", "infantil");
var peli2 = new movie_1.Movie("Deadpool", 2016, "USA", "superheroes");
var peli3 = new movie_1.Movie("Diario de Noa", 2004, "USA", "Romance");
var arrpeli = [peli1, peli2, peli3];
var milista = new imdb_1.imdb();
milista.peli = arrpeli;
console.log(milista);
milista.escribirEnFicheroJSON("imdbBBDD.json");
milista.obtenerInstanciaIMDB("imdbBBDD.json");
