import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { Api } from  './Api';

@Injectable()
export class PokemonServices{
        public url:String;
        constructor(
          private  _http: HttpClient
        ){
            this.url = Api.url;
        }

    searchPokemon(name):Observable<any>{
        var headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/search/' + name, {headers: headers});
    }

    getPokemons():Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/all-pokemons', {headers: headers});
    }
}

