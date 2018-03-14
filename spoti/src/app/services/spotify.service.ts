import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  UrlSpotify = "https://api.spotify.com/v1/";

  token: string = "BQA6g0Z8F0clPKSd5iNXFaQM3nXMUg3-pqk6qDdApaGVwkdpG4auDgYDLpMeOP5rTsGoZAXcP2CiIaMkYus";


  constructor(public http: HttpClient) {
    console.log("Servicio de spotify listo");
  }


  private getHeaders(): HttpHeaders {

    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  };


  getTop(id: string) {

    let Url = `${this.UrlSpotify}artists/${id}/top-tracks?country=US`

    let headers = this.getHeaders();

    return this.http.get(Url, { headers })

  }


  getArtista(id: string) {

    let Url = `${this.UrlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(Url, { headers })
    // .map((resp: any) => {
    //   this.artistas = resp.artists.items;
    //   return this.artistas;
    // });

  }


  getArtistas(termino: string) {

    let Url = `${this.UrlSpotify}search?query=${termino}&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(Url, { headers })
      .map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });

  }

}
