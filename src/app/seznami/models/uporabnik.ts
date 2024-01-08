import { Ocena } from './ocena';

export class Uporabnik {
    email?: string;
    geslo?: string;
    id?: number;
    ime?: string;
    ocene?: Array<Ocena>;
    priimek?: string;
    spol?: string;
    starost?: number;
    uporabniskoime?: string;
}
