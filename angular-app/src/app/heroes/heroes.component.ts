import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /* Remove DeadCode
  selectedHero : Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */
  //heroes = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // [Original] The HeroService.getHeroes() method has a synchronous signature
    //this.heroes = this.heroService.getHeroes();
    // [Observable] Subscribe in HeroesComponent
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
