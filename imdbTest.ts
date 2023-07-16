import { Movie } from "./movie";
import { imdb } from "./imdb";

let peli1 = new Movie ("Hercules", 1999, "griega", "infantil");
let peli2 = new Movie ("Deadpool", 2016, "USA", "superheroes");
let peli3 = new Movie ("Diario de Noa", 2004, "USA", "Romance");
let arrpeli =[peli1, peli2, peli3];
let milista : imdb = new imdb(arrpeli);

console.log(milista);