import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id:11, name: 'Ratface'},
  { id:12, name: 'Magnito'},
  { id:13, name: 'Ironman'},
  { id:14, name: 'Superwoman'},
  { id:15, name: 'Drypants'},
  { id:16, name: 'Magma'},
  { id:17, name: 'Taurus'},
  { id:18, name: 'Cyclone'},
  { id:19, name: 'Precipice'},
  { id:20, name: 'Volcom'},
  { id:21, name: 'Rocksalt'},
  { id:22, name: 'Chilli'}
];

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>

      <h2>My Heroes</h2>

      <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
          <label>Name: </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
      </div>
      `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero:Hero) { this.selectedHero = hero; }
}
