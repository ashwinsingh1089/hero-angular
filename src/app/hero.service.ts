import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: heroes Added');
      return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
      this.messageService.add(`HeroService: Added hero with id= ${id} Added`);
      return of(HEROES.find(hero => hero.id === id));
  }
}
