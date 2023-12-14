import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, mergeMap, take, toArray } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  apiUrl: string = environment.apiUrl;
  http = inject(HttpClient);

  getRandomPokemonByType(type: string): Observable<Pokemon> {
    return this.http.get<any>(`${this.apiUrl}/type/${type}`).pipe(
      map((data: any) => {
        const randomPokemonIndex = Math.floor(
          Math.random() * data.pokemon.length
        );
        const randomPokemonUrl = data.pokemon[randomPokemonIndex].pokemon.url;
        return randomPokemonUrl; // Devuelve la URL del Pokemon
      }),
      mergeMap((url: string) => this.getPokemonDetails(url, type)) // Devuelve el Pokemon
    );
  }

  getPokemonDetails(url: string, type: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(
      map((data: any) => {
        const name = data.name.replace('-', ' ');
        // Dividir la cadena si hay más de un guion y tomar la primera parte
        const finalName = name.split('-')[0];
        const pokemon: Pokemon = {
          name: finalName,
          sprite: data.sprites.front_default,
          type: type,
          id: data.id,
        };
        return pokemon;
      })
    );
  }

  getTeamOfFourRandomPokemon(): Observable<Pokemon[]> {
    const types = ['fire', 'water', 'electric', 'rock'];

    return from(types).pipe(
      mergeMap((type: string) => this.getRandomPokemonByType(type)),
      take(4),
      toArray()
    );
  }
}
