import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from "json-decorator";

let url = 'http://localhost:3000/'

@Injectable({
    providedIn: 'root'
})
@json("http")
export class AccidenteService {

    constructor(private http: HttpClient) { }

    // Inserta o actualiza al accidente
    save(accidente, images, cb) {
        const formData: FormData = new FormData()
        formData.append('data', JSON.stringify(accidente))
        for (let i = 0; i < images.length; i++) {
            const image = images[i]
            formData.append(image.file.name, <File>image.file, image.file.name)
        }
        this.http.post(`${url}api/accidente`, formData).subscribe(res => {
            // Validacion de errores
            if ((res as any).id != undefined) {
                accidente.id = (res as any).id
                cb(accidente)
            } else {
                console.log(res)
                cb(undefined, res)
            }
        })
    }

    getList(cb) {
        this.http.get(`${url}api/accidentes`).subscribe(res => {
            if ((res as any).length != undefined) {
                cb(res)
            } else {
                console.log(res)
                cb(undefined, res)
            }
        })
    }

    getAccidente(id, cb) {
        this.http.get(`${url}api/accidente/${id}`).subscribe(res => {
            if ((res as any).accidente != undefined) {
                cb(res)
            } else {
                console.log(res)
                cb(undefined, res)
            }
        })
    }

}
