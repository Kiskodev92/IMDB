export class Profesional{
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    constructor(name: string, age: number, weight: number,height: number , isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    toString() : string{
        let descripcion = `
        Nombre - ${this.name} 
        Edad - ${this.age}
        Peso - ${this.weight}
        Retirado - ${this.isRetired}
        Nacionalidad - ${this.nationality}
        Oscars - ${this.oscarsNumber}
        Profesion - ${this.profession}`
        return descripcion;
    }
}