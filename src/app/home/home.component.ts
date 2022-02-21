import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Pizza {
  name: string;
  time: string;
  image: string;
}

interface Complemento {
  name: string;
  image: string;
}

interface ResponseServer {
  bebidas: Complemento[];
  empanadas: Complemento[];
  pizzas: Pizza[];
  postres: Complemento[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  responseHttp: any; 

  ngOnInit(): void {
    this.responseHttp = {
      pizzas: [],
      empanadas: [],
      bebidas: [],
      postres: []
    }
    this.http.get('../../assets/response.json').subscribe(data => { this.responseHttp = data });
  }
  
}
