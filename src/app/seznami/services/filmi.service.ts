import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Film } from '../models/film'
import { FilmDto } from '../models/film-dto';

@Injectable()
export class FilmiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url =  environment.apiUrl + '/filmi';

    constructor(private http: HttpClient) {
    }

    getFilmi(): Observable<Film[]> {
        return this.http.get<Film[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getFilm(id: number): Observable<Film> {
        const url = `${this.url}/${id}`;
        return this.http.get<Film>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(
                            map(() => id),
                            catchError(this.handleError)
                        )
    }

    create(film_dto: FilmDto): Observable<Film> {
        return this.http.post<Film>(this.url, JSON.stringify(film_dto), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake, whoopsies:', error);
        return Promise.reject(error.message || error);
    }
}

