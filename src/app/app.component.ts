import { AutorizacionService } from './services/autorizacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  loggedIn;
  constructor(private autorizacionService:AutorizacionService)
  {
    this.autorizacionService.loggedChange.subscribe(valor => {this.loggedIn = valor;})
  }

  logout()
  {
    this.autorizacionService.logOut();
  }
}
