import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartasComponent } from './cartas/cartas.component';
import { FinalComponent } from './final/final.component';
import { JogoComponent } from './jogo/jogo.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { StartComponent } from './start/start.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'cartas', component: CartasComponent},
  {path: 'jogada', component: JogoComponent},
  {path: 'final', component: FinalComponent},
  {path: 'tutorial', component: TutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
