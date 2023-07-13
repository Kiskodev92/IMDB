"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profesional_1 = require("./profesional");
var artista1 = new profesional_1.Profesional("Cillian Murphy", 47, 60, false, "Irlandés", 0, "Actor");
var artista2 = new profesional_1.Profesional("Enma Stone", 34, 42, false, "USA", 3, "actriz");
console.log(artista1.toString());
console.log(artista2.toString());
