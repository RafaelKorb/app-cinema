import {Component, OnInit, ViewChild, AfterContentInit} from '@angular/core';
import { MoovieProvider } from "../movie.service"
declare var google;

@Component({
  selector: 'feed-tab3',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
  providers: [ 
    MoovieProvider
  ]

})
export class FeedPage implements OnInit, AfterContentInit {
  movieprovider: any;

  public lista_filmes = new Array<any>();

    @ViewChild('mapElement') mapElement;
  map;

  constructor(
    private movieProvider: MoovieProvider
    ) { 
    
  }

  ngOnInit() {
    this.movieProvider.getLastestMovies().subscribe(
      (data: any)=>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno);
      }, (error: any) => {
          console.log(error);
      }
    )
  }

    ngAfterContentInit(): void {
      this.map = new google.maps.Map (
        this.mapElement.nativeElement,
        {
          center: {lat: -32.051732, lng: -52.148073},
          zoom: 11
          
        });
        var System = new google.maps.Marker({
          position: {lat: -32.051732, lng: -52.148073},
          label: { text: 'System'},
          map: this.map,

        });
        
        var Dunas = new google.maps.Marker({
          position: {lat: -32.177919, lng: -52.166536},
          label: { text: 'Dunas'},
          map: this.map,
      });
      var Sercla = new google.maps.Marker({
        position: {lat: -32.114240, lng: -52.175602},
        label: { text: 'Sercla'},
        map: this.map, 
    });
    }
  } 