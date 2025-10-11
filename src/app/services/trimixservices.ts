import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trimixservices {
  constructor(){
    this.savelocalstore();
  }
  listaimagem : Array<string>= [];
  listanome :Array<string> = [];
  diasemana :Array<string> = [];
  horadicionada :Array<string> = [];

  addhora(add : string){
    this.horadicionada.push(add);
    const json = JSON.stringify(this.horadicionada);
    localStorage.setItem("hora" , json)
    this.savelocalstore();
  }
  retornohora(){
    return {
      horadia : this.horadicionada
    }
  }

  adddia(lista : string){
    this.diasemana.push(lista);
    const converter = JSON.stringify(this.diasemana);
    localStorage.setItem("semana",converter);
    this.savelocalstore();
  }
  retornadia(){
   return {
    semana : this.diasemana
   }
  }

  adicionarlista(imagem:string , nome:string){
    this.listaimagem.push(imagem);
    this.listanome.push(nome);
    this.savelocalstore();
  }
  retorno(){ 
    return {
      nomes : this.listanome,
      imagens : this.listaimagem
    };
  }
  savelocalstore(){
    const jsonimagem = JSON.stringify(this.listaimagem);
    const jsonnome = JSON.stringify(this.listanome);
    localStorage.setItem("imagem",jsonimagem);
    localStorage.setItem("nome",jsonnome);
  }
}
