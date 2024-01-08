import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {FilmiService} from './services/filmi.service';
import { FilmDto } from './models/film-dto';
import { Zanr } from './models/zanr';

@Component({
    moduleId: module.id,
    selector: 'dodaj-film',
    template: `
        <h2>Dodaj film</h2>
        <div *ngIf="film">
            <form (ngSubmit)="submitForm()" ngNativeValidate>
                <table>
                    <tr>
                        <td><label for="naziv">Naslov</label></td>
                        <td><input [(ngModel)]="film.ime" id="naziv" name="naziv" required /></td>
                    </tr>
                    <tr>
                        <td><label for="opis">Opis</label></td>
                        <td><textarea [(ngModel)]="film.opis" id="opis" name="opis"></textarea></td>
                    </tr>
                    <tr>
                        <td><label for="opis">Rating</label></td>
                        <td><input [(ngModel)]="film.rating" id="opis" name="rating" type="number" min="1" max="10"/></td>
                    </tr>
                </table>

                <br/>
                <button type="submit" style="width: 100px">Dodaj</button>
            </form>
        </div>
    `
})
export class FilmDodajComponent {
    film: FilmDto = new FilmDto;
    filmId: number;
    private sub: any;

    constructor(private filmiService: FilmiService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.filmId = + params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    submitForm(): void {
        this.film.ocene = []
        this.film.zanr = new Zanr
        this.film.zanrId = 1

        this.filmiService.create(this.film)
            .subscribe((film) => {
                console.log(film);
                this.router.navigate(['/filmi/' + film.id]);
            });
    }

    nazaj(): void {
        this.router.navigate(['/filmi']);
    }

}
