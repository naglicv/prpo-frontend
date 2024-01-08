
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OceneService } from './services/ocene.service';
import { Ocena } from './models/ocena';

@Component({
    moduleId: module.id,
    selector: 'ocene',
    template: `
    <div *ngIf="ocene" class="film">
        <div *ngFor="let ocena of ocene">
            <div style="display: flex;">
                <uporabnik [uporabnik_id]="ocena.uporabnikId" [is_comment_header]="true"></uporabnik>
                <span style="margin-left: 10px">{{ocena.ocena}}/10</span>
            </div>
            <div style="margin-bottom: 6px">
                {{ocena.komentar}}
            </div>
        </div>
    </div>
    `
})

export class OceneComponent implements OnInit {
    @Input() film_id: number;
    ocene: Ocena[];

    constructor(private oceneService: OceneService, private router: Router) {}

    ngOnInit(): void {
        this.getOcene();
    }

    getOcene(): void {
        this.oceneService
            .getOceneFilma(this.film_id)
            .subscribe(ocene => {
                console.log(ocene)
                this.ocene = ocene;
            });
    }
}
