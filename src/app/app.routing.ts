import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const appRoutes: Routes=[
    {path: '', component:HomeComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Pokedex', component: PokedexComponent},
    {path: 'Pokedex/:name', component:PokemonComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);