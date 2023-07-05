import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChoisiTonHeroComponent } from './choisi-ton-hero/choisi-ton-hero.component';
import { CombatHerosComponent } from './combat-heros/combat-heros.component';
import { DrawComponent } from './draw/draw.component';
import { VainqueurComponent } from './vainqueur/vainqueur.component';
import { VainqueurMechantComponent } from './vainqueur-mechant/vainqueur-mechant.component';
import { herosTypeColorPipe } from './heros-type-color.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ChoisiTonHeroComponent,
    CombatHerosComponent,
    DrawComponent,
    VainqueurComponent,
    VainqueurMechantComponent,
    herosTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
