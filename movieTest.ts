import { Profesional } from "./profesional";
import { Movie } from "./movie";

let peli = new Movie("Infinity War", 2018, "USA", "Superheroes");
let prof1 = new Profesional("Joe Russo",58, 80, false, "USA", 0, "Director");
let prof2 = new Profesional("Christopher Markus", 53, 70, false, "USA", 0, "Guionista");
let artista1 = new Profesional("Cillian Murphy", 47, 60, false, "Irlandés", 0, "Actor");
let artista2 = new Profesional("Enma Stone", 34, 42, false, "USA", 3, "actriz");

let actores = [artista1, artista1];

peli.director = prof1;
peli.actors = actores;
peli.writer = prof2;
peli.plataforma = "Disney+";
peli.isMCU = true;
peli.mainCharacterName = "Thanos";
peli.producer = "Kevin Feige";
peli.distributor = "Disney y Marvel";
console.log(peli.toString());
