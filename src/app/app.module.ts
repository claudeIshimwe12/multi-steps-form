import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    NavButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
