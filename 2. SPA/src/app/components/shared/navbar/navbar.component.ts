import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  heroe: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
    private router: Router) {

  }


  buscarHeroes(termino: string) {
    // this.heroe = this._heroesService.buscarHeroes(termino);
    this.router.navigate(['/busqueda', termino])

    // console.log(this.heroe);
  }

}
