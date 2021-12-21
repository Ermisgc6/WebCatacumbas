import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'
import { InicioComponent } from './vistas/inicio/inicio.component'
import { MantCargoComponent } from './vistas/mant-cargo/mant-cargo.component';
import { MantHorarioComponent } from './vistas/mant-horario/mant-horario.component';
import { MantTarifaComponent } from './vistas/mant-tarifa/mant-tarifa.component';
import { MantTrabajadorComponent } from './vistas/mant-trabajador/mant-trabajador.component';
import { MantUsuarioComponent } from './vistas/mant-usuario/mant-usuario.component';

import { ValidarTicketComponent } from './vistas/validar-ticket/validar-ticket.component';
import { VentaComponent } from './vistas/venta/venta.component';


const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'inicio', component:InicioComponent},
{path:'mantcargo', component:MantCargoComponent},
{path:'manthorario', component:MantHorarioComponent},
{path:'manttarifa', component:MantTarifaComponent},
{path:'manttrabajador', component:MantTrabajadorComponent},
{path:'mantusuario', component:MantUsuarioComponent},

{path:'validarticket', component:ValidarTicketComponent},
{path:'venta', component:VentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//exportamos los componentes mediante una constante
export const routingComponents = [LoginComponent, 
  InicioComponent, 
  MantUsuarioComponent, 
  VentaComponent,
  MantCargoComponent,
  MantHorarioComponent,
  MantTarifaComponent,
  MantTrabajadorComponent,
  ValidarTicketComponent
]
