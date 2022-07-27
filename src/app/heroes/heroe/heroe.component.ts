import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:String = 'IroMan';
    edad  :Number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()+ ' ok';
    }
    obtenerNombre():String{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarNombre():void{
        if (this.nombre == 'Yesid') 
           this.nombre = 'IroMan'
        else
          this.nombre = 'Yesid';
    }

    cambiarEdad():void{
        if (this.edad == 55) 
           this.edad = 45
        else
          this.edad = 55;
    }    
}