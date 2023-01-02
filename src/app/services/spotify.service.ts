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
      'Authorization': 'Bearer BQD2hdZUMn23f9BiejZ9n-jM4W9s6t2fRRa1JTPvtA4WipA_AEsydaj0ePY-AWwkpEA9cish7VhT9xrFiaCt3kdKqThSrdR6PskY0HJwXTUdkJd7t80'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {  
    return this.getQuery('browse/new-releases').pipe( map((data : any) => {
      return data.albums.items;
    }) );
  }

  getArtist(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map((data : any) => {
      return data.artists.items;
    }) );
  }
}
