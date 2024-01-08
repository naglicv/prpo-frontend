import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Film } from './models/film';
import { FilmiService } from './services/filmi.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    template: `
    <div style="display: flex;">
        <div style="flex: 1;"> 
            <ul class="seznami">
                <li *ngFor="let film of filmi" (click)="naPodrobnosti(film)">
                    <span>{{film.ime}}</span>
                    <button class="delete"
                            (click)="delete(film); $event.stopPropagation()">x
                    </button>
                </li>
            </ul>
        </div>
    
        <div style="flex: 1;">
            <dodaj-film></dodaj-film>
        </div>
    </div>
    `
})
export class FilmiComponent implements OnInit {
    filmi: Film[];
    film: Film;

    constructor(private filmService: FilmiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getSeznami();
    }

    getSeznami(): void {
        this.filmService
            .getFilmi()
            .subscribe(filmi => {
                console.log(filmi)
                this.filmi = filmi;
            });
    }

    naPodrobnosti(film: Film): void {
        this.film = film;
        this.router.navigate(['/filmi', this.film.id]);
    }

    delete(film: Film): void {
        this.filmService
            .delete(film.id)
            .subscribe(filmId => {
                console.log(filmId)
                this.filmi = this.filmi.filter(s => s.id !== filmId);
            });
    }

}
