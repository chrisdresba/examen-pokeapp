import { TestBed } from '@angular/core/testing';
import { PokeapiService } from './pokeapi.service';
import { Pokemon } from '../models/pokemon';

describe('PokeapiService', () => {
  let service: PokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a random Pokemon by type', (done: DoneFn) => {
    const type = 'fire';

    service.getRandomPokemonByType(type).subscribe((pokemon: Pokemon) => {
      expect(pokemon).toBeDefined();
      expect(pokemon.type).toBe(type);
      expect(pokemon.name).toBeTruthy();
      expect(pokemon.sprite).toBeTruthy();
      expect(pokemon.id).toBeGreaterThan(0);
      done();
    });
  });

  it('should handle error if type is invalid', (done: DoneFn) => {
    const type = 'invalid-type';

    service.getRandomPokemonByType(type).subscribe(
      () => {},
      (error) => {
        expect(error).toBeTruthy();
        done();
      }
    );
  });

  it('should return a team of four random Pokemon', (done: DoneFn) => {
    service.getTeamOfFourRandomPokemon().subscribe((team) => {
      expect(team).toBeDefined();
      expect(team.length).toBe(4);

      done();
    });
  });
});
