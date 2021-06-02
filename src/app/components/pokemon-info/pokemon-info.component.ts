import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

interface PokemonFullInfo {
  name: string;
  number: string;
  img: string;

};

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    let {data} = await new PokemonService().getPokemonFullInfo((document.getElementById('id_info') as HTMLFormElement).value);

    let name = data.name;
    let number = data.id;
    let img = data.sprites.front_default;
    let type1 = data.types[0].type.name;
    let type2 = data.types[1].type.name;
    let stats = data.stats;
    let ability = data.abilities;

    //let colorsByType: ColorByType = {fire:'#F08030',grass:'#78C850',poison:'#A040A0',flying:'#A890F0',water:'#6890F0',bug:'#A8B820',normal:'#A8A878',electric:'#F8D030',ground:'#E0C068',fairy:'#EE99AC',fighting:'#C03028',psychic:'#F85888',steel:'#B8B8D0',ghost:'#705898',rock:'#B8A038',ice:'#98D8D8',dark:'#705848',dragon:'#7038F8'}
  }

}
