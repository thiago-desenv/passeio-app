import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing-module';
import { LugareComponent } from './lugare-component/lugare-component';
import { Lugarcomponent } from './lugarcomponent/lugarcomponent';
import { Lugar } from './lugar/lugar';


@NgModule({
  declarations: [
    LugareComponent,
    Lugarcomponent,
    Lugar
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
