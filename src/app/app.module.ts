import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FilmiComponent} from './seznami/filmi.component';
import {FilmDodajComponent} from './seznami/film-dodaj.component';
import {FilmPodrobnostComponent} from './seznami/film-podrobnosti.component';
import {FilmiService} from './seznami/services/filmi.service';
import { OceneService } from './seznami/services/ocene.service';
import { OceneComponent } from './seznami/ocene.component';
import { UporabnikComponent } from './seznami/uporabnik.component';
import { UporabnikiService } from './seznami/services/uporabniki.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FilmiComponent,
        FilmPodrobnostComponent,
        FilmDodajComponent,
        OceneComponent,
        UporabnikComponent
    ],
    providers: [
        FilmiService,
        OceneService,
        UporabnikiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

