
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { OcenaDto } from '../models/ocena-dto';
import { Zanr } from '../models/zanr';

@Injectable()
export class ZanriService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url =  environment.apiUrl + '/zanri';

    constructor(private http: HttpClient) {
    }

    getZanri(): Observable<Zanr[]> {
        const url = `${this.url}`;
        return this.http.get<Zanr[]>(url)
                        .pipe(
                            catchError(this.handleError)
                        );
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake, whoopsies:', error);
        return Promise.reject(error.message || error);
    }
}
