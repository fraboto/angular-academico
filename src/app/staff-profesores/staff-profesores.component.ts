import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { AutorizacionService } from '../services/autorizacion.service';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-staff-profesores',
  templateUrl: './staff-profesores.component.html',
  styleUrls: ['./staff-profesores.component.css']
})
export class StaffProfesoresComponent implements OnInit {

  seleccion:any;
  nombre:string = "";
  id:string = "";
  id_prof:string = "";
  id_mat:string = "";
  cont:string = "";
  email:string = "";
  profesores:any;

  usuarioLogged:any;
  materiasProfesor:any;

  constructor(private personasService:PersonasService, private autorizacionService:AutorizacionService, private materiasService:MateriasService) { }

  ngOnInit()
  {
    this.profesores = this.personasService.getProfesores();
    this.usuarioLogged = this.autorizacionService.getUserLogged();
    this.materiasProfesor = this.usuarioLogged.materias;
  }

  mostrar(e)
  {
    this.seleccion = e;
  }

  agregar()
  {
    this.personasService.registrarProfesor(this.nombre, +this.id, this.cont, this.email);
    this.profesores = this.personasService.getProfesores();
    this.nombre = "";
    this.id = "";
    this.cont = "";
    this.email = "";
  }

  agregarMateria()
  {
    this.personasService.setMateriasPersona(+this.id_prof, this.id_mat);
    this.profesores = this.personasService.getProfesores();
    this.id_prof = "";
    this.id_mat = "";
  }

}
