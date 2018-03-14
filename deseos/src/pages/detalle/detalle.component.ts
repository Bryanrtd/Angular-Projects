import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from "../../app/clases/index";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: any;

    constructor(
        public navCtrl: NavController,
        public params: NavParams,
        public _listaDeseos: ListaDeseosService,
        public alertCtrl: AlertController
    ) {

        this.idx = params.get("idx");
        this.lista = params.get("lista");

    }

    ngOnInit() { }

    Actualizar(item: ListaItem) {

        item.completado = !item.completado;

        let todosMarcados = true;
        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this._listaDeseos.actualizarData();

    }

    borrarItem() {

        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Esta seguro que desea eliminar lista?',
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Confirmar',
                    handler: () => {
                        this._listaDeseos.eliminarLista(this.idx);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}