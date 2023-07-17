"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imdb = void 0;
var fs = require('fs');
var imdb = /** @class */ (function () {
    function imdb() {
        this.peli = [];
    }
    imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var newJson = JSON.stringify(this.peli);
        fs.writeFileSync(nombreFichero, newJson);
    };
    imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var dato = fs.readFileSync(nombreFichero, "utf8");
        var obj = JSON.parse(dato);
        var objDato = Object.assign(new imdb(), obj);
        return objDato;
    };
    return imdb;
}());
exports.imdb = imdb;
var dvd = new imdb();
var objImdb = JSON.stringify(dvd);
fs.writeFileSync("imdbBBDD.json", objImdb);
var data = fs.readFileSync("imdbBBDD.json", "utf8");
console.log(data);
var insImdb = JSON.parse(data);
console.log(insImdb);
