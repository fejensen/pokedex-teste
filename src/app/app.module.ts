import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonMenuComponent } from './components/pokemon-menu/pokemon-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonInfoComponent,
    PokemonMenuComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [PokemonMenuComponent]
})
export class AppModule { }
