import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Black-Widow','Thor','Starl-lord'];
  //public nameheroDelete:string = '';
  public nameheroDelete?:string;

  removeLastHero():void{
    const deleteHero  = this.heroNames.pop();
    //this.nameheroDelete = deleteHero ? deleteHero:'lista vacia';
    this.nameheroDelete = deleteHero;
  }

}
