import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-staff-materias',
  templateUrl: './staff-materias.component.html',
  styleUrls: ['./staff-materias.component.css']
})
export class StaffMateriasComponent implements OnInit {

  seleccion:any;
  materias:any;
  nombre:string;
  id:string;

  constructor(private materiasService:MateriasService) { }

  ngOnInit()
  {
    this.materias = this.materiasService.getMaterias();
  }

  mostrar(e)
  {
    this.seleccion = e;
  }

  agregar()
  {
    this.materiasService.setMateria(this.nombre, this.id)
    this.materias = this.materiasService.getMaterias();
    this.nombre = "";
    this.id = "";
  }

}
