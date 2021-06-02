import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

interface Pokemon {
  name: string;
  url: string;
  img: string;
  number: string;
  color1:string;
  color2:string;

  type: Array<string>;
  stats: Array<string>;
  abilities: Array<string>;

};

interface ColorByType{
  [type:string] : string
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  title = 'Poke-Menu';
  opened: boolean =  true;
  pokemonRequest : Array<Pokemon> = [];
  JSON = JSON;

  async ngOnInit(): Promise<void> {
    let { data } = await new PokemonService().getPokemons();
    let pokemonResults:Array<Pokemon> = [];

    data.results.map(
      async(result: Pokemon)=>{
        let { data } = await new PokemonService().getPokemonInfo(result.url);
        let imgUrl = data.sprites.front_default;
        let pokeName = data.name;
        let pokeNumber = data.id;
        let pokeType = data.types;
        let pokeStats = data.stats;
        let pokeAbility = data.abilities;

        let colorsByType: ColorByType = {
          'fire':'#F08030',
          'grass':'#78C850',
          'poison':'#A040A0',
          'flying':'#A890F0',
          'water':'#6890F0',
          'bug':'#A8B820',
          'normal':'#A8A878',
          'electric':'#F8D030',
          'ground':'#E0C068',
          'fairy':'#EE99AC',
          'fighting':'#C03028',
          'psychic':'#F85888',
          'steel':'#B8B8D0',
          'ghost':'#705898',
          'rock':'#B8A038',
          'ice':'#98D8D8',
          'dark':'#705848',
          'dragon':'#7038F8'
        }

        let pokeColor1:string = colorsByType[data.types[0].type.name];
        let pokeColor2:string = colorsByType[data.types[1].type.name];

       pokemonResults.push({name:pokeName, url:'', img:imgUrl, number:pokeNumber,color1:pokeColor1, color2:pokeColor2, type:pokeType, stats:pokeStats, abilities:pokeAbility});
      }
    )
    this.pokemonRequest = pokemonResults;
  }

  constructor() {
  }

}
