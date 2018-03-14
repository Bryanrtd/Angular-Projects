import { Lista } from './../clases/listas';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'pedientes',
    pure: false
})

export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], estado: boolean = false): Lista[] {

        let nuevalista: Lista[] = [];

        for (let lista of listas) {

            if (lista.terminada == estado) {
                nuevalista.push(lista);
            }
        }

        return nuevalista;

    }
}