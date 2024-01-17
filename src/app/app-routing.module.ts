import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FilmiComponent } from './seznami/filmi.component';
import { FilmPodrobnostComponent } from './seznami/film-podrobnosti.component';

// Preslikava URL poti na komponente
const routes: Routes = [
    {path: '', redirectTo: '/filmi', pathMatch: 'full'},
    {path: 'filmi', component: FilmiComponent},
    {path: 'filmi/:id', component: FilmPodrobnostComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
