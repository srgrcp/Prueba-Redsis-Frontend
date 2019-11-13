import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from "json-decorator";

let url = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
@json("http")
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  // Inserta o actualiza al empleado
  save(empleado, cb){
    this.http.post(`${url}api/empleado`, empleado).subscribe(res => {
      // Validacion de errores
      if ((res as any).id != undefined) {
        empleado.id = (res as any).id
        cb(empleado)
      } else {
        console.log(res)
        cb(undefined, res)
      }
    })
  }

  //Obtiene la lista de todos los empleados
  getList(cb){
    this.http.get(`${url}api/lista-empleados`).subscribe(res => {
      if ((res as any).length != undefined) {
        cb(res)
      } else {
        console.log(res)
        cb(undefined, res)
      }
    })
  }
}
