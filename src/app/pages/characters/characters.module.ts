import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';
import { EstadoPipe } from './pipes/estado.pipe';
import { EspeciePipe } from './pipes/especie.pipe';
import { GeneroPipe } from './pipes/genero.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage, EstadoPipe, EspeciePipe, GeneroPipe]
})
export class CharactersPageModule {}
