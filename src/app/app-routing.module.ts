import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoisiTonHeroComponent } from './choisi-ton-hero/choisi-ton-hero.component';
import { CombatHerosComponent } from './combat-heros/combat-heros.component';
import { VainqueurComponent } from './vainqueur/vainqueur.component';
import { VainqueurMechantComponent } from './vainqueur-mechant/vainqueur-mechant.component';
import { DrawComponent } from './draw/draw.component';
import { herosTypeColorPipe } from './heros-type-color.pipe'

const routes: Routes = [  
  { path: 'list-heros', component: ChoisiTonHeroComponent},
  { path: 'combat/:id', component: CombatHerosComponent},
  { path: 'vainqueur/:id', component: VainqueurComponent},
  { path: 'vainqueur-mechant/:id', component: VainqueurMechantComponent},
  { path: 'draw', component: DrawComponent },
  { path: '', redirectTo: 'list-heros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
