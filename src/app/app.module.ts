import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';
import { FormAccidenteComponent } from './form-accidente/form-accidente.component';
import { ListaAccidentesComponent } from './lista-accidentes/lista-accidentes.component';
import { AccidenteComponent } from './accidente/accidente.component';

export let InjectorInstance: Injector;

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FormEmpleadoComponent,
        FormAccidenteComponent,
        ListaAccidentesComponent,
        AccidenteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        InjectorInstance = this.injector;
    }
}
