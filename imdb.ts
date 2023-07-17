import { Movie } from "./movie";
let fs = require('fs');

export class imdb{
    public peli : Movie[];
    constructor(){
        this.peli = [];
    }
    escribirEnFicheroJSON(nombreFichero : string):void{
        let newJson = JSON.stringify(this.peli);
        fs.writeFileSync(nombreFichero, newJson)
        ;
    }
    obtenerInstanciaIMDB(nombreFichero : string) : imdb {
        let dato =fs.readFileSync(nombreFichero ,"utf8")
        let obj=JSON.parse(dato)
        console.log(obj)
        return obj;
    }
}