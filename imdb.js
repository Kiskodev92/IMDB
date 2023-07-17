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
        console.log(obj);
        return obj;
    };
    return imdb;
}());
exports.imdb = imdb;
