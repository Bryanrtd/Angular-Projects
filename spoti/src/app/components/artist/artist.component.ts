import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  tracks: any[] = [];

  constructor(private activatedroute: ActivatedRoute,
    public _spotify: SpotifyService) { }

  ngOnInit() {

    this.activatedroute.params
      .map(params => params['id'])
      .subscribe(id => {

        console.log(id);
        this._spotify.getArtista(id).subscribe(artista => {

          this.artista = artista;

          console.log(this.artista);
          return artista;
        });

        this._spotify.getTop(id)
          .map((resp: any) => resp.tracks)
          .subscribe(track => {

            this.tracks = track;

            console.log(this.tracks);

            return this.tracks;

          });

      });


  }

}
