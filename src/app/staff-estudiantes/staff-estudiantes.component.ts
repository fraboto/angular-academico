import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { AutorizacionService } from '../services/autorizacion.service';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-staff-estudiantes',
  templateUrl: './staff-estudiantes.component.html',
  styleUrls: ['./staff-estudiantes.component.css']
})
export class StaffEstudiantesComponent implements OnInit {

  seleccion:any;
  nombre:string = "";
  id:string = "";
  id_est:string = "";
  id_mat:string = "";
  id_prog:string = "";
  programa:string = "";
  cont:string = "";
  email:string = "";
  estudiantes:any;

  usuarioLogged:any;
  materias:any;
  materiasEstudiante:any;

  constructor(private personasService:PersonasService, private autorizacionService:AutorizacionService, private materiasService:MateriasService) { }
  
  ngOnInit()
  {
    this.estudiantes = this.personasService.getEstudiantes();
    this.usuarioLogged = this.autorizacionService.getUserLogged();
    this.materiasEstudiante = this.usuarioLogged.materias;
    this.materias = this.materiasService.getMaterias();
  }

  mostrar(e)
  {
    this.seleccion = e;
  }

  agregar()
  {
    this.personasService.registrarEstudiante(this.nombre, +this.id, this.programa, this.cont, this.email);
    this.estudiantes = this.personasService.getEstudiantes();
    this.nombre = "";
    this.id = "";
    this.programa = "";
    this.cont = "";
    this.email = "";
  }

  agregarMateria()
  {
    this.personasService.setMateriasPersona(+this.id_est, this.id_mat);
    this.estudiantes = this.personasService.getEstudiantes();
    this.id_est = "";
    this.id_mat = "";
  }

  enviarMateria(e)
  {
    this.id_mat = e;
  }

  agregarMateriaEstudiante()
  {
    this.id_mat = this.materiasService.getMateriaName(this.id_mat).id;
    this.personasService.setMateriasPersona(this.usuarioLogged.id, this.id_mat);
    this.materiasEstudiante = this.personasService.getPersonaID(this.usuarioLogged.id).materias;
    this.id_est = "";
    this.id_mat = "";
    console.log(this.materiasEstudiante)
  }

  agregarPrograma()
  {
    this.personasService.setProgramaEstudiante(+this.id_est, this.id_prog);
    this.estudiantes = this.personasService.getEstudiantes();
    this.id_est = "";
    this.id_prog = "";
  }


}
