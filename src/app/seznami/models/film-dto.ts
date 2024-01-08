import { Ocena } from './ocena';
import { Zanr } from './zanr';

export class FilmDto {
    id?: number;
    ime?: string;
    ocene?: Array<Ocena>;
    opis?: string;
    rating?: number;
    zanr?: Zanr;
    zanrId?: number;
}
