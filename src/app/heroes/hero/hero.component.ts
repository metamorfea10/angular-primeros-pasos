import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre:string = 'Marco';
  public edad:  number = 32;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHerodescription(): string{

    return `${this.nombre} - ${this.edad}`;
  }

  changeHero():void{
    this.nombre = 'Spiderman';
  }

  changeAge():void{
    this.edad = 23;
  }
  reset():void{
    this.nombre = 'Marco';
    this.edad = 32;
  }

}
