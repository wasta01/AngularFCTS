import { Injectable } from '@angular/core';

@Injectable()
export class TrabajosService {
  private trabajos:Array<object>=[{title:"Titulo prueba",image:null,desc:"Texto prueba Texto prueba Texto pruebaTexto prueba Texto pruebaTexto pruebaTexto pruebaTexto prueba"},
  {title:"Titulo prueba",image:null,desc:"Texto prueba Texto prueba Texto pruebaTexto prueba Texto pruebaTexto pruebaTexto pruebaTexto prueba"},
  {title:"Titulo prueba",image:null,desc:"Texto prueba Texto prueba Texto pruebaTexto prueba Texto pruebaTexto pruebaTexto pruebaTexto prueba"},
  {title:"Titulo prueba",image:null,desc:"Texto prueba Texto prueba Texto pruebaTexto prueba Texto pruebaTexto pruebaTexto pruebaTexto prueba"},
  {title:"Titulo prueba",image:null,desc:"Texto prueba Texto prueba Texto pruebaTexto prueba Texto pruebaTexto pruebaTexto pruebaTexto prueba"}
];
  constructor() { }
  getJobs(){
    return this.trabajos;
  }
  addJob(job){
    this.trabajos.push(job);
  }
}
