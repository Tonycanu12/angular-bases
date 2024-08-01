import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {



  @Input()
  public characterList: Character[] = [{
    name: 'trunk',
    power:10,
  }]

  //envento onDelite enviaos el index
  @Output()
  public onDelite: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(CharacterId:string):void{
    //emitir el indice
    //console.log('character Index: ' + indexCharacter )
    this.onDelite.emit(CharacterId);
  }
}
