import { Component } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

  public setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor( private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }, error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
    return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
