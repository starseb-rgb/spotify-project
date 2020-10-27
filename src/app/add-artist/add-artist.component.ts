import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html'
})
export class AddArtistComponent implements OnInit {

  artistName: string;
  artists: string[];

  constructor() { }

  ngOnInit(): void {
  }

  addArtist(): void {
    this.artists.push(this.artistName);
    console.log(this.artists);
  }

}
