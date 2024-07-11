import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { ChooseAdOnsComponent } from './components/choose-ad-ons/choose-ad-ons.component';
import { FinishingUpComponent } from './components/finishing-up/finishing-up.component';
import { FinalComponent } from './components/final/final.component';

const routes: Routes = [
  { path: '', component: PersonalInfoComponent },
  { path: 'step-2', component: SelectPlanComponent },
  { path: 'step-3', component: ChooseAdOnsComponent },
  { path: 'step-4', component: FinishingUpComponent },
  { path: 'finish', component: FinalComponent },
  { path: '**', component: PersonalInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
