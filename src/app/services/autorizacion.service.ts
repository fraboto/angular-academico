import { Injectable } from '@angular/core';
import { PersonasService } from './personas.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  usuarios:any;
  logged: boolean = false;

  loggedChange: Subject<boolean> = new Subject<boolean>();

  constructor(private personasService:PersonasService, private router:Router)
  {
    this.loggedChange.subscribe((valor) => {
      this.logged = valor;
  });
  }

  public ingresar(user, pass)
  {
    this.usuarios = this.personasService.getPersonas();
    var user = this.usuarios.find(function(usuario) {
      if (usuario.id === +user || usuario.email === user)
      {
        return usuario;
      }
      else
      {
        return null;
      }
    });

    if(user && user.pass === pass)
    {
      this.loggedChange.next(!this.logged);
      localStorage.setItem("usuarioLoggeado", JSON.stringify(user));
      alert("Ingreso Exitoso!");
      this.router.navigate(["/inicio"]);
    }
    else
    {
      alert("Ingreso Fallido!");
    }
  }

  public registrarProfesor(nombre, id, cont, email)
  {
    this.personasService.registrarProfesor(nombre, id, cont, email);
    alert("profesor registrado");
  }

  public registrarEstudiante(nombre, id, programa, cont, email)
  {
    this.personasService.registrarEstudiante(nombre, id, programa, cont, email);
    alert("estudiante registrado");
  }

  public registrarStaff(nombre, id, cont, email)
  {
    this.personasService.registrarStaff(nombre, id, cont, email);
    alert("staff registrado");
  }

  public isLogged()
  {
    return this.logged;
  }

  public getUserLogged()
  {
    return JSON.parse(localStorage.getItem("usuarioLoggeado"));
  }

  public logOut()
  {
    localStorage.removeItem("usuarioLoggeado");
    this.loggedChange.next(!this.logged);
    this.router.navigate(["/"]);
    return "Log Out Exitoso!";
  }
}
