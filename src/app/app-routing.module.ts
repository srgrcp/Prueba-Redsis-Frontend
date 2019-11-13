import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';
import { FormAccidenteComponent } from './form-accidente/form-accidente.component';
import { ListaAccidentesComponent } from './lista-accidentes/lista-accidentes.component';
import { AccidenteComponent } from './accidente/accidente.component';


const routes: Routes = [
  { path: 'registrar-empleado', component: FormEmpleadoComponent },
  { path: '', redirectTo: '/registrar-empleado', pathMatch: 'full' },
  { path: 'registrar-accidente', component: FormAccidenteComponent },
  { path: 'lista-accidentes', component: ListaAccidentesComponent },
  { path: 'accidente/:id', component: AccidenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
