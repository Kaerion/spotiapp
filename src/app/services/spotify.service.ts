import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKlfzIHi52XZ-w7Gmvn8j1QvJhbUemA0Z-Cv4dZ22PXsPiNCecSg4_dFSRir0tRGB_YknEsxkQiQ8jS0vGCq6dS05ikJG6OfygsiY4AHjaiL_Fe2I'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
