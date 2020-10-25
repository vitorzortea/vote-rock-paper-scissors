import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CartasComponent } from './cartas/cartas.component';
import { JogoComponent } from './jogo/jogo.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FinalComponent } from './final/final.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CartasComponent,
    JogoComponent,
    ResultadoComponent,
    FinalComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
