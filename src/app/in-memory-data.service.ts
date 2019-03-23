import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Compromissos } from './compromissos';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const compromissos = [
      { id: 11, nome: 'Compromisso 1', horario: '12/04/2019-12:30' },
      { id: 12, nome: 'Compromisso 2', horario: '10/04/2019-12:30' },
      { id: 13, nome: 'Compromisso 3', horario: '23/04/2019-12:30' },
      { id: 14, nome: 'Compromisso 4', horario: '21/04/2019-12:30' },
      { id: 15, nome: 'Compromisso 5', horario: '12/05/2019-12:30' },
      { id: 16, nome: 'Compromisso 6', horario: '01/04/2019-12:30' },
      { id: 17, nome: 'Compromisso 7', horario: '28/10/2019-12:30' },
      { id: 18, nome: 'Compromisso 8', horario: '17/04/2019-12:30' },
      { id: 19, nome: 'Compromisso 9', horario: '11/04/2019-12:30' },
      { id: 20, nome: 'Compromisso 10', horario: '19/04/2019-12:30' },
      { id: 21, nome: 'Compromisso 11', horario: '11/04/2019-12:30' },
      { id: 22, nome: 'Compromisso 12', horario: '11/04/2019-12:30' }
    ];
    return {compromissos};
  }
  genId(retorno: Compromissos[]): number {
    return retorno.length > 0 ? Math.max(...retorno.map(hero => hero.id)) + 1 : 11;
  }
}
