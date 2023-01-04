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
      'Authorization': 'Bearer BQCXyLnvccAn3QaB0Grqh6e8Zxrktqay-9Dw9FTEEO-8xFN_MdZ6CN3Fud6syKjAp7vIM4RDLCz45Pt8BcNzHi7XF7j8l6Dkj01Htm-aUbVwlbtmKPY'
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
