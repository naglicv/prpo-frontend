import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Uporabnik } from '../models/uporabnik';

@Injectable()
export class UporabnikiService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url =  environment.apiUrl + '/uporabniki';

    constructor(private http: HttpClient) {}

    getUporabnik(id: number): Observable<Uporabnik> {
        const url = `${this.url}/${id}`;
        return this.http.get<Uporabnik>(url)
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake, whoopsies:', error);
        return Promise.reject(error.message || error);
    }
}
