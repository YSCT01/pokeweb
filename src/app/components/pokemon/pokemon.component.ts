import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonServices } from '../../services/pokemon.service';
import { Api } from '../../services/Api';
import { Router, ActivatedRoute, Params, RouterLink} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers:[PokemonServices],
})
export class PokemonComponent implements OnInit {

  public url:String;
  public pokemon:Pokemon;
  public request:Boolean;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _pokemonServices:PokemonServices,

  ) { 
    this.url = Api.url;
    this.request = true;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var name = params.name;
      this.getPokemon(name);
    });
  }

  getPokemon(p_name:any) {
    this._pokemonServices.searchPokemon(p_name).subscribe(
      response=>{
        this.pokemon = response.pokemon;
        this.request = true;
      },
      error=>{
        console.log(<any>error);
        this.request=false;
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
