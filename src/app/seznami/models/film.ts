import { Ocena } from './ocena';
import { Zanr } from './zanr';

export class Film {
    id?: number;
    ime?: string;
    ocene?: Array<Ocena>;
    opis?: string;
    rating?: number;
    zanr?: Zanr;
}
