import { DetalleComponent } from './../detalle/detalle.component';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {
    constructor(private navCtrl: NavController,
        public _listaDeseos: ListaDeseosService) { }

    ngOnInit() { }

    verDetalle(lista, idx) {
        this.navCtrl.push(DetalleComponent, {
            lista, idx
        });
    }
}