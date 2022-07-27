import { WriteKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent {
  heroes:string[] = ['SpideMan','IroMan','Hulk','Tor','Yesid'];
  heroeBorrado:String = '';
 
  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '';

  }
}
