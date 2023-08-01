import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetValue()">reset</button>`
})

export class CounterComponent   {
  public title: string = 'Hola mundito';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetValue():void{
    this.counter = 10;
  }


}
