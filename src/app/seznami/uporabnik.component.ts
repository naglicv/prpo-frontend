import { Component, Input, OnInit } from "@angular/core";
import { Uporabnik } from "./models/uporabnik";
import { UporabnikiService } from "./services/uporabniki.service";

@Component({
    selector: "uporabnik",
    template: `
    <div *ngIf="uporabnik">
        <div *ngIf="uporabnik.ime != ''; else Anonymous">
            <b *ngIf="is_comment_header">{{ uporabnik.ime }}</b>
        </div>
    </div>

    <ng-template #Anonymous>
        <b *ngIf="is_comment_header">Anonymous</b>
    </ng-template>
    `,
})

export class UporabnikComponent implements OnInit {
  @Input() uporabnik_id: number;
  @Input() is_comment_header = false;

  uporabnik: Uporabnik;

  constructor(private uporabnikiService: UporabnikiService) {}

  ngOnInit(): void {
    this.getUporabnik();
  }

    getUporabnik(): void {
        this.uporabnikiService
            .getUporabnik(this.uporabnik_id)
            .subscribe((uporabnik) => {
                console.log(uporabnik);
                this.uporabnik = uporabnik;
            });
    }
}
