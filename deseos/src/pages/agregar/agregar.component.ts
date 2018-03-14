import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular'

import { Lista, ListaItem } from "../../app/clases/index";


@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {
    constructor(public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseos: ListaDeseosService) { }

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    ngOnInit() { }

    agregar() {

        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = "";
    }

    eliminar(i: number) {
        this.items.splice(i, 1);

    }

    agregarLista() {

        if (this.nombreLista.length == 0) {
            let alerta = this.alertCtrl.create({
                title: 'Alerta',
                subTitle: 'Es bligatorio introducir nombre de la lista',
                buttons: ['OK']
            });

            alerta.present();
            return;
        }


        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        this._listaDeseos.agregarLista(lista);
        this.navCtrl.pop();

    }
}