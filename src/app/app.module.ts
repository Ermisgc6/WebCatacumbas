import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VentaComponent } from './vistas/venta/venta.component';
import { ValidarTicketComponent } from './vistas/validar-ticket/validar-ticket.component';
import { MantTarifaComponent } from './vistas/mant-tarifa/mant-tarifa.component';
import { MantHorarioComponent } from './vistas/mant-horario/mant-horario.component';
import { MantTrabajadorComponent } from './vistas/mant-trabajador/mant-trabajador.component';
import { MantCargoComponent } from './vistas/mant-cargo/mant-cargo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //declaramos los componentes importados
    routingComponents,
    VentaComponent,
    ValidarTicketComponent,
    MantTarifaComponent,
    MantHorarioComponent,
    MantTrabajadorComponent,
    MantCargoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
