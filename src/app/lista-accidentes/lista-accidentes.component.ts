import { Component, OnInit } from '@angular/core';
import { AccidenteService } from '../models/accidente.service';
import { toast } from 'bulma-toast';
import { Accidente } from '../models/accidente';

@Component({
  selector: 'app-lista-accidentes',
  templateUrl: './lista-accidentes.component.html',
  styleUrls: ['./lista-accidentes.component.sass']
})
export class ListaAccidentesComponent implements OnInit {

    list: Accidente[] = []

  constructor(private accidenteService: AccidenteService) { }

  ngOnInit() {
      this.accidenteService.getList((list, err) => {
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
