"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesional = void 0;
var Profesional = /** @class */ (function () {
    function Profesional(name, age, weight, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Profesional.prototype.toString = function () {
        var descripcion = "\n        Nombre - ".concat(this.name, " \n        Edad - ").concat(this.age, "\n        Peso - ").concat(this.weight, "\n        Retirado - ").concat(this.isRetired, "\n        Nacionalidad - ").concat(this.nationality, "\n        Oscars - ").concat(this.oscarsNumber, "\n        Profesion - ").concat(this.profession);
        return descripcion;
    };
    return Profesional;
}());
exports.Profesional = Profesional;
