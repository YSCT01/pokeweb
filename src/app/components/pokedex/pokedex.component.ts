import { Component, OnInit } from '@angular/core';
import { PokemonServices } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Api } from '../../services/Api';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers:[PokemonServices]
})
export class PokedexComponent implements OnInit {
  public url:String;
  public listPokemon:Pokemon[];
  constructor(
    private _pokemonServices:PokemonServices,
  ) { 
    this.url = Api.url;
  }

  ngOnInit(): void {
    this.getPokemons();
  }

getPokemons(){
  this._pokemonServices.getPokemons().subscribe(
    response=>{
      
        this.listPokemon = response.pokemons;
    },
    error=>{
      console.log(<any>error);
    }
  );
}



  colorDiv(type){
    switch(type){
      case 'Fire':
        return "Fire";
        break;
      case 'Water':
        return "Water";
        break;
      case 'Grass':
        return "Grass";
        break;
      case 'Electric':
        return "Electric";
        break;
      case 'Poison':
        return "Poison";
        break;
      case 'Ground':
        return "Ground";
        break;
      case 'Rock':
        return "Rock";
        break;
      case 'Steel':
        return "Steel";
        break;
      case 'Flying':
        return "Flying";
        break;  
      case 'Fight':
        return "Fight";
        break;
      case 'Psychic':
        return "Psychic";
        break;
      case 'Dark':
        return "Dark";
        break;
      case 'Ghost':
        return "Ghost";
        break;
      case 'Bug':
        return "Bug";
        break;
      case 'Ice':
        return "Ice";
        break;
      case 'Dragon':
        return "Dragon";
        break;
      case 'Normal':
        return "Normal";
        break;
      case 'Fairy':
        return "Fairy";
        break;
      default:
        return "None";
        break;
    }
  }


}
