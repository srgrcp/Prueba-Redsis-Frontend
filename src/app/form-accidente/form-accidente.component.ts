import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../models/empleado.service';
import { AccidenteService } from '../models/accidente.service';
import { Empleado } from '../models/empleado';
import { Accidente } from '../models/accidente';
import { toast } from 'bulma-toast';

@Component({
    selector: 'app-form-accidente',
    templateUrl: './form-accidente.component.html',
    styleUrls: ['./form-accidente.component.sass']
})
export class FormAccidenteComponent implements OnInit {

    // Lista de empleados
    list: Empleado[] = []
    // Imput de empleado
    emplInput: string | number
    // Empleado seleccionado
    emplSel: string
    // Deshabilita boton 'Registrar'
    loading: boolean
    // Accidente obtenido del formulario
    accidente: Accidente = {}
    validDate: boolean = false
    images = []

    constructor(
        private empleadoService: EmpleadoService,
        private accidenteService: AccidenteService
    ) { }

    checkDate() {
        let emp = this.list.find(e => e.id == this.emplInput as number)
        if (emp)
            this.validDate = new Date(this.accidente.fecha).valueOf() > new Date(emp.ingreso).valueOf()
        else
            this.validDate = false
    }

    submit() {
        // Deshabilita boton 'Registrar'
        this.loading = true
        this.accidenteService.save(this.accidente, this.images, (acc, err) => {
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
                    message: `Accidente registrado correctamente.`,
                    position: 'bottom-center',
                    type: 'is-link',
                    dismissible: true,
                    closeOnClick: true
                })
                this.emplSel = undefined
                this.emplInput = undefined
                this.accidente = {}
                this.images = []
            }
            // Habilita boton 'Registrar'
            this.loading = false
        })
    }

    // Seleccionar empleado
    setEmpleado() {
        let emp = this.list.find(e => e.id == this.emplInput as number)
        if (emp) {
            this.emplSel = `${emp.cedula} ${emp.nombre}`
            this.accidente.empleado = emp.id
        }
        else {
            this.emplSel = undefined
            this.accidente.empleado = undefined
        }
    }

    getImage(image: File, i){
        var reader = new FileReader()
        reader.onload = (e) => {
            this.images[i].url = (<any>e.target).result
        }
        reader.readAsDataURL(image)
    }

    inputFile(files: File[]){
        for (let i = 0; i < files.length; i++) {
            const fl = files[i];
            this.images.push({ file: fl, url: '' })
            this.getImage(fl, this.images.length-1)
        }
    }

    ngOnInit() {
        // Obtener la lista de empleados
        this.empleadoService.getList((list, err) => {
            if (list != undefined) this.list = list
            else {
                console.log(err)
                toast({
                    message: `<div class="container is-unselectable"><p>Error</p>${JSON.stringify(err)}</div>`,
                    position: 'bottom-center',
                    type: 'is-danger',
                    dismissible: true,
                    closeOnClick: true
                })
            }
        })
    }

}
