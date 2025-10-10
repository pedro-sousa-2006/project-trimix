import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trimixservices {
  listaimagem : Array<string>= [];
  listanome :Array<string> = [];

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
