import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prpo-app',
    template: `
        <div class="w-100">
            <h1>{{naslov}}</h1>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    naslov = 'Priporočila filmov';
}
