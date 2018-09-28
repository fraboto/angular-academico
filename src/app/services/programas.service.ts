import { Injectable } from '@angular/core';
import { MateriasService } from './materias.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  programas:any = [
    {nombre: "Ingeniería Física", id: "IFIS", asignaturas: [], estudiantes: [] },
    {nombre: "Ingeniería Civil", id: "ICIV", asignaturas: [], estudiantes: [] },
    {nombre: "Biología", id: "BIOP", asignaturas: [], estudiantes: [] },
    {nombre: "Química", id: "QMCP", asignaturas: [], estudiantes: [] },
    {nombre: "Matemática Pura", id: "MATP", asignaturas: [], estudiantes: [] },
  ];

  constructor(private materiasService:MateriasService)
  {

  }

  public getProgramas()
  {
    return this.programas;
  }

  public getProgramaID(id)
  {
    return this.programas.filter(programa => {return programa.id === id})[0] || null;
  }

  public setPrograma(nombre, id)
  {
    this.programas.push({nombre: nombre, id: id, asignaturas: [], estudiantes: []})
  }

  public setMateriasPrograma(id_programa, id_materia)
  {
    var programa = this.getProgramaID(id_programa);
    programa.asignaturas.push(this.materiasService.getMateriaID(id_materia));
    this.materiasService.setProgramasMateria(id_materia, id_programa);
  }

  public vincularEstudiante(id_programa, nombre)
  {
    var programa = this.getProgramaID(id_programa);
    programa.estudiantes.push(nombre);
  }
}
