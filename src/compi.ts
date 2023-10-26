//Interfaz que representa un intervalo de tiempo
interface IntervaloHorario {
     fechaInicio : Date;
     fechaFin : Date;
}


export class Compi {
    readonly id: number;
    horarioNoDisponible: Array<IntervaloHorario>;

    constructor(id: number, horarioNoDisponible: Array<IntervaloHorario>) {
        this.id = id;
        this.horarioNoDisponible = horarioNoDisponible;
    }
}