import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccidenteService } from '../models/accidente.service';
import { toast } from 'bulma-toast';
import { Accidente } from '../models/accidente';
import { Empleado } from '../models/empleado';

@Component({
    selector: 'app-accidente',
    templateUrl: './accidente.component.html',
    styleUrls: ['./accidente.component.sass']
})
export class AccidenteComponent implements OnInit {

    id: number
    accidente: Accidente
    empleado: Empleado
    imagenes: [] = []

    constructor(
        private route: ActivatedRoute,
        private accidenteService: AccidenteService
    ) { }

    print(){
        document.getElementById('print').innerHTML = document.getElementById('printacc').innerHTML
        window.print()
    }

    ngOnInit() {
        this.route.paramMap.subscribe((res: Params) => {
            this.id = res.params.id
            this.accidenteService.getAccidente(this.id, (res, err) => {
                if (err != undefined) {
                    toast({
                        message: `<div class="container is-unselectable"><p>Error</p>${JSON.stringify(res)}</div>`,
                        position: 'bottom-center',
                        type: 'is-danger',
                        dismissible: true,
                        closeOnClick: true
                    })
                } else {
                    this.empleado = res.empleado
                    this.accidente = res.accidente
                    this.imagenes = res.imagenes
                }
            })
        })
    }

}
