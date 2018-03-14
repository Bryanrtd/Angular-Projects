import { DetalleComponent } from './../detalle/detalle.component';
import { AgregarComponent } from './../agregar/agregar.component';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';

import { NavController } from "ionic-angular";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    constructor(public _listaDeseos: ListaDeseosService,
        private navCtrl: NavController) { }

    ngOnInit() { }


    irAgregar() {
        this.navCtrl.push(AgregarComponent)

    }

    verDetalle(lista, idx) {
        this.navCtrl.push(DetalleComponent, {
            lista, idx
        });

    }
}