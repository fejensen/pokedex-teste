import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from
'./components/pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from
'./components/pokemon-info/pokemon-info.component';

const routes: Routes = [
  { path: 'pokemon-list-component', component: PokemonListComponent },
  { path: 'pokemon-info-component', component: PokemonInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
