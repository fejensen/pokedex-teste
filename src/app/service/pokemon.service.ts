import axios from 'axios';

export class PokemonService {

  constructor(){

  }

  async getPokemons() {
   return await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  }

  async getPokemonInfo(url: string){
    return await axios.get(url);
  }


}
