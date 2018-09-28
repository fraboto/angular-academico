import { Component, OnInit } from '@angular/core';
import { ProgramasService } from '../services/programas.service';

@Component({
  selector: 'app-staff-programas',
  templateUrl: './staff-programas.component.html',
  styleUrls: ['./staff-programas.component.css']
})
export class StaffProgramasComponent implements OnInit {

  seleccion:any;
  programas:any;
  nombre:string;
  id:string;
  id_prog:string;
  id_mat:string;

  constructor(private programasService:ProgramasService) { }

  ngOnInit()
  {
    this.programas = this.programasService.getProgramas();
  }

  mostrar(e)
  {
    this.seleccion = e;
  }

  agregar()
  {
    this.programasService.setPrograma(this.nombre, this.id);
    this.programas = this.programasService.getProgramas();
    this.nombre = "";
    this.id = "";
  }

  setMaterias()
  {
    this.programasService.setMateriasPrograma(this.id_prog, this.id_mat);
    this.programas = this.programasService.getProgramas();
    this.id_prog = "";
    this.id_mat = "";
  }

}
