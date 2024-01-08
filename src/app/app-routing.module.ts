import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FilmiComponent } from './seznami/filmi.component';
import { FilmPodrobnostComponent } from './seznami/film-podrobnosti.component';
import { FilmDodajComponent } from './seznami/film-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/filmi', pathMatch: 'full'},
    {path: 'filmi', component: FilmiComponent},
    {path: 'filmi/:id', component: FilmPodrobnostComponent},
    {path: 'filmi/:id/dodaj', component: FilmDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
