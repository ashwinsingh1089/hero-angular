import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  id: number;
  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private heroService: HeroService
  ) { }
  getHero() {
      this.id = +this.route.snapshot.paramMap.get('id'); /*'+' typecasts to number*/
      this.heroService.getHero(this.id).subscribe(hero => this.hero = hero);
  }
  goBack() {
      this.location.back();
  }
  ngOnInit() {
      this.getHero();
  }

}
