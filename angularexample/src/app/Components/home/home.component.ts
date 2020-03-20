import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  datos: any[] = [];
  cargando: boolean = false;
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.service.getDatos().subscribe(res => {
      this.datos = res;
      console.log("datos: " + res );
      this.cargando = false;
    }, err => {
      this.datos = [];
      this.cargando = false;
      console.log("error: " + err);
    });
  }

}
