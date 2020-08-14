import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PokemonServices } from './services/pokemon.service';
import { Api } from './services/Api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PokemonServices]
})
export class AppComponent {
  title = 'pokemon-web';
  faSearch = faSearch;

  public url:String;
  public p_name:String;

  constructor(
      private _pokemonServices:PokemonServices,
      private _router:Router,

  ){
    this.url = Api.url;
  }

  searchPokemon(p_form){
    if(this.p_name == "" || this.p_name.length <= 0){
      this._router.navigate(['/']);
    }

    if(this.p_name.length > 0){
    this.p_name.toString();
    var part2= this.p_name.slice(1).toLowerCase();
    var part1 = this.p_name.charAt(0).toUpperCase();
    this.p_name = part1.concat(part2);
    this._router.navigate(['/Pokedex/'+ this.p_name]);
    p_form.reset();
    }
  }

  
}


