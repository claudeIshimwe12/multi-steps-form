import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { ChooseAdOnsComponent } from './components/choose-ad-ons/choose-ad-ons.component';
import { FinishingUpComponent } from './components/finishing-up/finishing-up.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    ChooseAdOnsComponent,
    FinishingUpComponent,
    FinalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
