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
      'Authorization': 'Bearer BQB2pqiK9vJSzu31v2hi8S6Z5Ou7KEFGpKdvS_3g2jr1w-Q2KYYO3wH5H05ZWGQ76bc0wVWTLWkg9fiMuhGNxUN8Z3V6I8BRBHxmu-emE6R3Nw5iHiE'
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
