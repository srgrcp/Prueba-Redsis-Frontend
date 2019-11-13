import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../models/empleado.service';
import { Empleado } from '../models/empleado';
import { toast } from 'bulma-toast';

@Component({
    selector: 'app-form-empleado',
    templateUrl: './form-empleado.component.html',
    styleUrls: ['./form-empleado.component.sass']
})
export class FormEmpleadoComponent implements OnInit {

    // Deshabilita boton 'Registrar'
    loading: boolean
    empleado: Empleado = {}

    constructor(private empleadoService: EmpleadoService) { }

    ngOnInit() {
    }

    formSubmit() {
        // Deshabilita boton 'Registrar'
        this.loading = true
        this.empleadoService.save(this.empleado, (emp, err) => {
            if (err) {
                console.log(err)
                toast({
                    message: `<div class="container is-unselectable"><p>Error</p>${JSON.stringify(err)}</div>`,
                    position: 'bottom-center',
                    type: 'is-danger',
                    dismissible: true,
                    closeOnClick: true
                })
            }
            else {
                toast({
                    message: `Empleado registrado correctamente.`,
                    position: 'bottom-center',
                    type: 'is-link',
                    dismissible: true,
                    closeOnClick: true
                })
                this.empleado = {}
            }
            // Habilita boton 'Registrar'
            this.loading = false
        })
    }

}
