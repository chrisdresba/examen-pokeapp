import { Component, inject } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pokemonTeam: Pokemon[] = [];

  pokeapiService = inject(PokeapiService);

  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon(): void {
    this.pokeapiService.getTeamOfFourRandomPokemon().subscribe((pokemons) => {
      this.pokemonTeam = pokemons;
    });
  }
}
