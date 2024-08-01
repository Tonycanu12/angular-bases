import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krinllin',
    power: 100
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name:'Picoro',
    power:3000
 }];

 addCharacter( character:Character):void{
  //forma simple
  // const newCharacter: Character = {
  //   id: uuid(),
  //   name: character.name,
  //   power:character.power
  // }

  //con operador ... (spreed)
  const newCharacter: Character = { id:uuid(), ...character};

  this.character.push(newCharacter);
 }

//  deleteCharacter(indexCharacter:number):void{
//     this.character.splice(indexCharacter,1)
//  }

 deleteCharacterById(id:string):void{
    this.character = this.character.filter(character => character.id !== id);
 }


}
