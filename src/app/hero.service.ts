import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Compromissos } from './compromissos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

private heroesUrl = 'api/compromissos';

getHeroes (): Observable<Compromissos[]> {
  return this.http.get<Compromissos[]>(this.heroesUrl);
}

updateHero (hero: Compromissos): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions);
}

addHero (hero: Compromissos): Observable<Compromissos> {
  return this.http.post<Compromissos>(this.heroesUrl, hero, httpOptions);
}

deleteHero (hero: Compromissos | number): Observable<Compromissos> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Compromissos>(url, httpOptions);
}

searchHeroes(term: string): Observable<Compromissos[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Compromissos[]>(`${this.heroesUrl}/?horario=${term}`)
}
  constructor(private http: HttpClient) { }
}
