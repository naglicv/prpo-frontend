import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {Film} from './models/film';
import {FilmiService} from './services/filmi.service';

@Component({
    moduleId: module.id,
    selector: 'film-podrobnosti',
    template: `
        <div *ngIf="film">
            <div class="film">
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <h3 class="film-title">{{film.ime}} </h3>
                        <span>{{film.zanr.ime}} {{film.rating}}/10</span>
                    </div>
                    <button style="height: 60px !important;" (click)="nazaj()">Nazaj</button> 
                </div>
                <hr>
                <p class="opis-filma">
                    {{film.opis}}
                </p>
            </div>
            <div>
                <ocene [film_id]="film.id"></ocene>
            </div>
        </div>
    `
})
export class FilmPodrobnostComponent implements OnInit {
    film: Film;

    constructor(private filmService: FilmiService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.filmService.getFilm(+params['id'])))
            .subscribe(film => {
                console.log(film);
                this.film = film;
            });
    }

    nazaj(): void {
        this.router.navigate(['filmi']);
    }
}
