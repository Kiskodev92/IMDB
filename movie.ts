import {Profesional} from "./profesional";
export class Movie{
    public title : string;
    public releaseYear : number;
    public actors : Profesional[];
    public nacionality : string;
    public director : Profesional;
    public writer : Profesional;
    public language : string;
    public plataforma : string;
    public  isMCU : boolean;
    public mainCharacterName : string;
    public producer : string;
    public distributor : string;
    public genre : string;
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