import { Component } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

  public getAllPokemons: any;

  constructor( private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons)
      }
    );
  }
}
