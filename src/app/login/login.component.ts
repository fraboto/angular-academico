import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = "";
  pass:string = "";

  constructor(private autorizacionService:AutorizacionService) { }

  ngOnInit() {
  }

  private ingresar()
  {
    this.autorizacionService.ingresar(this.user, this.pass);
  }

}
