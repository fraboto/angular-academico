import { Injectable } from '@angular/core';
import { MateriasService } from './materias.service';
import { ProgramasService } from './programas.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas:any = [
    {nombre: "Francisco Bohórquez", id: 1, rol: "estudiante", programa: null, materias: [], pass: "1234", email: "franciscobohorquez@correo.com"},
    {nombre: "Carlos Molano", id: 2, rol: "profesor", materias: [], pass: "1234", email: "carlossmolano@correo.com"},
    {nombre: "Mónica Ortega", id: 3, rol: "estudiante", programa: null, materias: [], pass: "1234", email: "monicaortega@correo.com"},
    {nombre: "Ricardo Ortíz", id: 0, rol: "staff", pass: "1234", email: "ricardoortiz@correo.com"}
  ];

  constructor(private materiasService:MateriasService, private programasService:ProgramasService)
  {

  }

   /**
   * getPersonas
   */
  public getPersonas()
  {
    return this.personas;
  }

  public getProfesores()
  {
    return this.personas.filter(profe => {return profe.rol === "profesor";})
  }

  public getEstudiantes()
  {
    return this.personas.filter(est => {return est.rol === "estudiante";})
  }

  public getStaffs()
  {
    return this.personas.filter(staff => {return staff.rol === "staff";})
  }

  /**
   * getEstudiante
   */
  public getPersonaID(id)
  {
    return this.personas.filter(persona => { return persona.id === id;})[0];
  }

  /**
   * setProgramaEstudiante
   */
  public setProgramaEstudiante(id_estudiante, id_programa)
  {
    var estudiante = this.getPersonaID(id_estudiante);
    estudiante.programa = this.programasService.getProgramaID(id_programa).nombre;
    this.programasService.vincularEstudiante(id_programa, estudiante.nombre);
    alert("Programa registrado!");

  }

  /**
   * setMateriasEstudiante
   */
  public setMateriasPersona(id_persona, id_materia)
  {
    var persona = this.getPersonaID(id_persona);
    persona.materias.push(this.materiasService.getMateriaID(id_materia).nombre);
    if(persona.rol === "estudiante")
    {
      this.materiasService.vincularEstudiante(id_materia, persona.nombre);
    }
    if(persona.rol === "profesor")
    {
      this.materiasService.setProfesorMateria(id_materia,persona.nombre);
    }
    alert("Materia agregada!");
  }

  /**
   * setEstudiante
   */
  public registrarEstudiante(nombre, id, programa, cont, email)
  {
    this.personas.push({nombre: nombre, id: id, rol: "estudiante", programa: programa, materias: [], pass: cont, email: email});
    alert("Estudiante registrado!");

  }

  /**
   * setProfesor
   */
  public registrarProfesor(nombre, id, cont, email)
  {
    this.personas.push({nombre: nombre, id: id, rol: "profesor", materias: [], pass: cont, email: email});
    alert("Profesor registrado!");
  }

  public registrarStaff(nombre, id, cont, email)
  {
    this.personas.push({nombre: nombre, id: id, rol:"staff", pass: cont, email: email});
    alert("Staff registrado!");
  }
}
