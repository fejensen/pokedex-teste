import { Component, OnInit, Input} from '@angular/core';


interface PokemonFullInfo {
  name: string;
  img: string;
  number: string;
  color1:string;
  color2:string;
  type: Array<string>;
  stats: Array<string>;
  abilities: Array<string>;
};



@Component({
  selector: 'app-pokemon-info/',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {


  }

}
