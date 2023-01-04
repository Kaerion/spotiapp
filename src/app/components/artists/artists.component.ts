import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artist: any = {};
  loading: boolean ;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artist =>{
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(toptracks =>{
      this.topTracks = toptracks.tracks;
      console.log(this.topTracks);
    });
  }
}
