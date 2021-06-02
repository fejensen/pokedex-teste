import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  state !: Observable<object>;
  constructor(public activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    this.state = this.activatedRoute.paramMap
    console.log(this.state)
  }

}
