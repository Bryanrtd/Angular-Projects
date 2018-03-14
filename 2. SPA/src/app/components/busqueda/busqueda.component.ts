import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string = "";

  constructor(private _heroesService: HeroesService,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {


    this.activatedroute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);

      console.log(this.heroes)
    });


  }

}
