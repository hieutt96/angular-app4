import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/hero';
import { heroes } from './../../config/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = heroes;
  selectedHero : Hero;
  constructor() { }

  ngOnInit() {
  }

  onClick(hero: Hero): void {
    // console.log(hero.name);
    this.selectedHero = hero;
  }

}
