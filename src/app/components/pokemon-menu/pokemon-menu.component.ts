import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

interface Pokemon {
  name: string;
  url: string;
  img: string;
};

export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.scss']
})

export class PokemonMenuComponent implements OnInit {
  title = 'Poke-Menu';
  opened: boolean =  true;
  pokemonRequest : Array<Pokemon> = [];
  JSON = JSON;
  constructor() {
  }

  async ngOnInit(): Promise<void> {
    let { data } = await new PokemonService().getPokemons();
    let pokemonResults:Array<Pokemon> = [];

    data.results.map(
      async(result: Pokemon)=>{
        let { data } = await new PokemonService().getPokemonInfo(result.url);
        let imgUrl = data.sprites.front_default;
        let pokeName = data.name;

       pokemonResults.push(await{name:pokeName, url:'', img:imgUrl});
      }
    )

    this.pokemonRequest = pokemonResults;
  }
}
