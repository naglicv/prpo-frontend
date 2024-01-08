import { Film } from './film';
import { Uporabnik } from './uporabnik';

export class Ocena {
    film?: Film;
    id?: number;
    komentar?: string;
    ocena?: number;
    uporabnik?: Uporabnik;
}
