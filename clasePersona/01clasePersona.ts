export class Persona {


    private _Nombre: string;
    private _Apellidos: string;
    private _Edad: number;
    private _DNI: string;
    private _Cumpleanos: Date;
    private _ColorFavorito: string;
    private _Sexo: string;


    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string) {

        this._Nombre = nombre;
        this._Apellidos = apellidos;
        this._Edad = edad;
        this._DNI = dni;
        this._Cumpleanos = cumpleanos;
        this._ColorFavorito = colorFavorito;
        this._Sexo = sexo;




    }

    set Nombre(nombre: string) {
        this._Nombre = nombre;
    }
    set Apellidos(apellidos: string) {
        this._Apellidos = apellidos;
    }
    set Edad(edad: number) {
        this._Edad = edad;
    }
    set DNI(dni: string) {
        this._DNI = dni;
    }
    set Cumpleanos(cumpleanos: Date) {
        this._Cumpleanos = cumpleanos;
    }
    set ColorFavorito(colorFavorito: string) {
        this._ColorFavorito = colorFavorito;
    }
    set Sexo(sexo: string) {
        this._Sexo = sexo;
    }



    get Nombre() {
        return this._Nombre;
    }

    get Apellidos() {
        return this._Apellidos;
    }

    get Edad() {
        return this._Edad;
    }

    get DNI() {
        return this._DNI;
    }

    get Cumpleanos() {
        return this._Cumpleanos;
    }

    get ColorFavorito() {
        return this._ColorFavorito;
    }

    get Sexo() {
        return this._Sexo;
    }


}
