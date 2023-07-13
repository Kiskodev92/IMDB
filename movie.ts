import { Profesional } from "./profesional";
export class Movie{
    title : string;
    releaseYear : number;
    actors : Profesional[];
    nacionality : string;
    director : Profesional;
    writer : Profesional;
    language : string;
    plataforma : string;
    isMCU : boolean;
    mainCharacterName : string;
    producer : string;
    distributor : string;
    genre : string;
    constructor (title:string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nationality;
        this.genre = genre;
    }
    toString() : string{
        let pelicula = `        
        Titulo - ${this.title} 
        Estreno - ${this.releaseYear}
        Actores - ${this.actors}
        Nacionalidad - ${this.nacionality}
        Director - ${this.director}
        Escritor - ${this.writer}
        Idioma - ${this.language}
        Plataforma - ${this.plataforma} 
        EsUCM - ${this.isMCU}
        Protagonista - ${this.mainCharacterName}
        Productor - ${this.producer}
        Distribuidor - ${this.distributor}
        Genero - ${this.genre}`
        return pelicula;
    }
}