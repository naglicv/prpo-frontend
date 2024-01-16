import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {FilmiService} from './services/filmi.service';
import { FilmDto } from './models/film-dto';
import { Zanr } from './models/zanr';
import { ZanriService } from './services/zanri.service';

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
                        <td><input [(ngModel)]="film.ime" id="naziv" name="naziv" required placeholder="Borat" /></td>
                    </tr>
                    <tr>
                        <td><label for="opis">Opis</label></td>
                        <td><textarea [(ngModel)]="film.opis" id="opis" name="opis" placeholder="American in Kazakhstan."></textarea></td>
                    </tr>
                    <tr>
                        <td><label for="opis">Rating</label></td>
                        <td><input [(ngModel)]="film.rating" id="opis" name="rating" type="number" min="1" max="10" placeholder=10/></td>
                    </tr>

                    <tr>
                        <td><label for="zanr">Žanr</label></td>
                        <td>
                            <select [(ngModel)]="zanrId" id="zanr" name="zanr">
                                <option *ngFor="let zanr of zanri" [value]="zanr.id">{{zanr.ime}}</option>
                            </select>
                        </td>
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
    zanri: Zanr[];
    zanrId: string;
    private sub: any;

    constructor(private filmiService: FilmiService,
                private zanriService: ZanriService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.filmId = + params['id'];
        });

        this.zanriService.getZanri()
            .subscribe(zanri => {
                console.log(zanri)
                this.zanri = zanri;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    submitForm(): void {
        this.film.ocene = []
        this.film.zanr = new Zanr
        this.film.zanrId = parseInt(this.zanrId, 10)

        this.filmiService.create(this.film)
            .subscribe((film) => {
                this.router.navigate(['/filmi/' + film.id]);
            });
    }

    nazaj(): void {
        this.router.navigate(['/filmi']);
    }

}
