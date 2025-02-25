import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) {}

  // Função para navegar para a página do Pokémon
  goToPokemonDetail(pokemon: string) {
    this.router.navigate([pokemon]); // Navega para a rota especificada
  }
}
