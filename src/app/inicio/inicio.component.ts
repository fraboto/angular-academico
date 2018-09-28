import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: any;

  constructor(private autorizacionService:AutorizacionService) { }

  ngOnInit()
  {
    this.user = this.autorizacionService.getUserLogged();
  }

}
