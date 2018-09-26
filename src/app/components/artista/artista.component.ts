import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

   artista: any = {};
   topTracks: any[] = [];
   loadingArtista: boolean;

  constructor( private router: ActivatedRoute, 
               private spotify: SpotifyService ) { 

      this.loadingArtista = true;

      this.router.params.subscribe( params =>{

         this.getArtista( params['id'] )
         this.getTopTracks( params['id'] )

      })
  }

  getArtista( id: string ) {

      this.loadingArtista = true;

      this.spotify.getArtista( id )
         .subscribe( artista => {
            console.log(artista);
            this.artista = artista;
            this.loadingArtista = false;
         })
  }

  getTopTracks( id: string ){
      this.spotify.getTopTracks( id )
         .subscribe( topTracks => {
            this.topTracks = topTracks;
            console.log(topTracks)
         })
  }


}
