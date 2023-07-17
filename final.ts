import { imdb } from "./imdb";
import { Movie } from "./movie";
import {Profesional} from "./profesional";
let readlineSync = require('readline-sync');

let name = readlineSync.question("ingrese su nombre:  ")
let edad = readlineSync.questionInt("ingrese su edad:  ")
let peso= readlineSync.questionInt("ingrese su peso  ")
let altura = readlineSync.questionInt("ingrese su altura:  ")
let estaRetirado =readlineSync.keyInYN("esta usted retirado:  ")
let nacionalidad = readlineSync.question("cual es su nacionalidad:  ")
let Oscars = readlineSync.questionInt("tiene algun Oscar:  ")
let profesion= readlineSync.question("cual es su profesion:  ")



let profesional: Profesional = new Profesional(name, edad,peso,altura,estaRetirado,nacionalidad,Oscars,profesion)




console.log(profesional);

let pelitest:Movie = new Movie("Mi vecino Tororo",1988,"japonesa","anime")

pelitest.actors = [profesional]
console.log(pelitest.actors);

console.log(pelitest); 