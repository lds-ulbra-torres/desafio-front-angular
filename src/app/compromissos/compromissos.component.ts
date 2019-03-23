import { Compromissos } from './../compromissos';
import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compromissos',
  templateUrl: './compromissos.component.html',
  styleUrls: ['./compromissos.component.css']
})
export class CompromissosComponent implements OnInit {
  
  compromissos: Array<any>;

  @Input() hero: Compromissos;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.compromissos = heroes);
  }
  constructor(private heroService: HeroService) { }

  add(nome: string, horario: string): void {
    nome = nome.trim();
    horario = horario;
    if (!nome) { return; }
    this.heroService.addHero({ nome, horario } as Compromissos)
      .subscribe(compromissos => {
        this.compromissos.push(compromissos);
      });
  }

  save(hero: Compromissos): void {
    this.heroService.updateHero(hero)
      .subscribe();
  }

  delete(hero: Compromissos): void {
    this.compromissos = this.compromissos.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
