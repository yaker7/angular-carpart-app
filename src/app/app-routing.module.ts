import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {RaceComponent} from './race/race.component';

export const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent},
  {path: 'race', component: RaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
