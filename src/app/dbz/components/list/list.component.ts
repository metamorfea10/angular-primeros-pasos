import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 1000
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    //todo emitir el id del personaje
    if( !id ) return;
    this.onDelete.emit(id);
  }
}
