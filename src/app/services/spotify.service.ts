import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query : string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': '' //Spotify no acepta peticiones post que no sea hagan desde un server (Backend), asi que para pruebas de front, poner el token aqui.
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {  
    return this.getQuery('browse/new-releases').pipe( map((data : any) => {
      return data.albums.items;
    }) );
  }

  getArtists(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map((data : any) => {
      return data.artists.items;
    }) );
  }

  getArtist(id : string){
    return this.getQuery(`artists/${id}`).pipe( map((data : any) => {
      return data;
    }) );
  }

  getTopTracks(id : string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe( map((data : any) => {
      return data;
    }) );
  }
}
