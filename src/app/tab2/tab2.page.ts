import {Component, OnInit, ViewChild, AfterContentInit} from '@angular/core';
import { MoovieProvider } from "../movie.service"
declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ 
    MoovieProvider
  ]

})
export class tab2Page implements OnInit, AfterContentInit {
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
          zoom: 14
          
        });
        var marker = new google.maps.Marker({
          position: {lat: -32.051732, lng: -52.148073},
          map: this.map,
         
        });
    }
  }