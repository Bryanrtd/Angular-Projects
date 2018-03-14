import { Lista } from './../clases/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {

        console.log("Servicio Inicializado");

        this.cargarData();
    }

    actualizarData() {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargarData() {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }


    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.actualizarData();
    }

    eliminarLista(idx:number) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    }
}