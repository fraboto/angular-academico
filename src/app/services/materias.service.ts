import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService 
{
  
  materias:any = [
    {nombre: "Cálculo I", id: "MAT-01", programas: ["IFIS", "ICIV", "BIOP", "QMCP", "MATP"], estudiantes: [], profesor: null},
    {nombre: "Cálculo II", id: "MAT-02", programas: ["IFIS", "ICIV", "BIOP", "QMCP", "MATP"], estudiantes: [], profesor: null},
    {nombre: "Cálculo III", id: "MAT-03", programas: ["IFIS", "ICIV"], estudiantes: [], profesor: null},    
    {nombre: "Ecuaciones Diferenciales", id: "MAT-04", programas: ["IFIS"], estudiantes: [], profesor: null},
    {nombre: "Suelos I", id: "CIV-01", programas: ["ICIV"], estudiantes: [], profesor: null},    
    {nombre: "Suelos II", id: "CIV-02", programas: ["ICIV"], estudiantes: [], profesor: null},    
    {nombre: "Invertebrados", id: "BIO-01", programas: ["BIOP"], estudiantes: [], profesor: null},    
    {nombre: "Vertebrados", id: "BIO-02", programas: ["BIOP"], estudiantes: [], profesor: null},    
    {nombre: "Química General", id: "QMC-01", programas: ["IFIS", "QMCP"], estudiantes: [], profesor: null},    
    {nombre: "Química Orgánica", id: "QMC-02", programas: ["IFIS", "QMCP"], estudiantes: [], profesor: null},    
  ];

  /**
   * getMaterias
   */
  public getMaterias()
  {
    return this.materias;
  }

  /**
   * getMateriaID
   */
  public getMateriaID(id)
  {
    return this.materias.filter(materia => {return materia.id === id})[0] || null;
  }

  public getMateriaName(nombre)
  {
    return this.materias.filter(materia => {return materia.nombre === nombre})[0] || null;
  }

  /**
   * vincularEstudiante
   */
  public vincularEstudiante(id_materia, estudiante)
  {
    var materia = this.getMateriaID(id_materia);
    materia.estudiantes.push(estudiante);
  }

  /**
   * setProfesorMateria
   */
  public setProfesorMateria(id_materia, profesor)
  {
    var materia = this.getMateriaID(id_materia);
    materia.profesor = profesor;   
  }

  /**
   * setMateia
   */
  public setMateria(nombre, id)
  {
    this.materias.push({nombre: nombre, id: id, programas: [], estudiantes: [], profesor: null});
  }

  /**
   * setProgramasMateria
   */
  public setProgramasMateria(id_materia, id_programa)
  {
    var materia = this.getMateriaID(id_materia);
    materia.programas.push(id_programa);
  }  

  constructor() { }
}
