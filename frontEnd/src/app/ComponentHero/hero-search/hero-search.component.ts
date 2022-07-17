import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../../services/interfaces/hero';
import { HeroService } from '../heroServices/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$
      = this.searchTerms
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((term: string) =>
            this.heroService
              .searchHero(term))
        );
  }

  search(term: string): void {
    this.searchTerms
      .next(term);
  }
}
