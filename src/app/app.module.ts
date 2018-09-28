import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonasService } from './services/personas.service';
import { MateriasService } from './services/materias.service';
import { ProgramasService } from './services/programas.service';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AutorizacionService } from './services/autorizacion.service';
import { StaffProfesoresComponent } from './staff-profesores/staff-profesores.component';
import { StaffEstudiantesComponent } from './staff-estudiantes/staff-estudiantes.component';
import { StaffProgramasComponent } from './staff-programas/staff-programas.component';
import { StaffStaffComponent } from './staff-staff/staff-staff.component';
import { StaffMateriasComponent } from './staff-materias/staff-materias.component';
import { ClaseDirective } from './directives/clase.directive';
import { NombreProgramaPipe } from './pipes/nombre-programa.pipe';
import { AutorizacionGuard } from './guards/autorizacion.guard';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [AutorizacionGuard]},
  {path: 'staff-profesores', component: StaffProfesoresComponent, canActivate: [AutorizacionGuard]},
  {path: 'staff-estudiantes', component: StaffEstudiantesComponent, canActivate: [AutorizacionGuard]},
  {path: 'staff-staff', component: StaffStaffComponent, canActivate: [AutorizacionGuard]},
  {path: 'staff-programas', component: StaffProgramasComponent, canActivate: [AutorizacionGuard]},
  {path: 'staff-materias', component: StaffMateriasComponent, canActivate: [AutorizacionGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    StaffProfesoresComponent,
    StaffEstudiantesComponent,
    StaffProgramasComponent,
    StaffStaffComponent,
    StaffMateriasComponent,
    ClaseDirective,
    NombreProgramaPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MateriasService, ProgramasService, PersonasService, AutorizacionService, AutorizacionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
