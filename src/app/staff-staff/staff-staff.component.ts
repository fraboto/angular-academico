import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-staff-staff',
  templateUrl: './staff-staff.component.html',
  styleUrls: ['./staff-staff.component.css']
})
export class StaffStaffComponent implements OnInit {

  seleccion:any;
  staffs:any;

  form_persona:FormGroup;

  constructor(private personasService:PersonasService) { }

  ngOnInit()
  {
    this.staffs = this.personasService.getStaffs();
    this.form_persona = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'id': new FormControl('', Validators.required),
      'cont': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
    })
  }

  mostrar(e)
  {
    this.seleccion = e;
  }

  agregar(f)
  {
    this.personasService.registrarStaff(f.nombre, +f.id, f.cont, f.email);
    this.staffs = this.personasService.getStaffs();
    this.form_persona.reset({nombre: '', id: '', cont: '', email: ''});
  }

  get nombre() { return this.form_persona.get('nombre'); }
  get id() { return this.form_persona.get('id'); }
  get cont() { return this.form_persona.get('cont'); }
  get email() { return this.form_persona.get('email'); }

}
