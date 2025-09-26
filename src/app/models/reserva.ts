import { EnumDeclaration } from "typescript";

export class reserva{
    id_reserva ?: number ;
    dia_reserva : string = "";
    hora_reserva : Date = new Date();
}