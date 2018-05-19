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
    // this.heroes = this.heroService.getHeroes();
    // [Observable] Subscribe in HeroesComponent
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(
      () => this.heroes = this.heroes.filter(h => h != hero)
    )
   }

  ngOnInit() {
    this.getHeroes();
  }
}
