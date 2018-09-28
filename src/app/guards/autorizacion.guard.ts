import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../services/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {

  logged:boolean;

  constructor(private autorizacionService:AutorizacionService)
  {
    this.logged = this.autorizacionService.isLogged();
  }

  canActivate()
  {
    console.log(this.logged);
    return this.logged;
  }
}
