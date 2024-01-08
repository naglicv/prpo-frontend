
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { OcenaDto } from '../models/ocena-dto';

@Injectable()
export class OceneService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url =  environment.apiUrl + '/ocene';

    constructor(private http: HttpClient) {
    }

    getOceneFilma(film_id: number): Observable<OcenaDto[]> {
        const url = `${this.url}`;
        return this.http.get<OcenaDto[]>(url)
                        .pipe(
                            map(ocene => ocene.filter(ocena => ocena.filmId === film_id)),
                            catchError(this.handleError)
                        );
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake, whoopsies:', error);
        return Promise.reject(error.message || error);
    }
}
