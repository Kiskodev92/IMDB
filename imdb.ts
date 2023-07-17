import { Movie } from "./movie";
let fs = require('fs');

export class imdb{
    public peli : Movie[];
    constructor(){
        this.peli = [];
    }
    escribirEnFicheroJSON(nombreFichero : string){
        let newJson = JSON.stringify(this.peli);
        fs.writeFileSync(nombreFichero, newJson)
        ;
    }
    obtenerInstanciaIMDB(nombreFichero : string) : imdb {
        let dato =fs.readFileSync(nombreFichero ,"utf8")
        let obj=JSON.parse(dato)
        let objDato = Object.assign(new imdb(),obj)
        return objDato;
    }
}
let dvd : imdb = new imdb();

let objImdb = JSON.stringify(dvd)

fs.writeFileSync("imdbBBDD.json",objImdb)

let data = fs.readFileSync("imdbBBDD.json", "utf8")

console.log(data);

let insImdb = JSON.parse(data)

console.log(insImdb);