import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrillaComponent } from './grilla/grilla.component';
import { ListaComponent } from './lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LlegadaComponent } from './llegada/llegada.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

  {path:"", component:AppComponent},
  {path:"llegada",component:LlegadaComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    ListaComponent,
    LlegadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
