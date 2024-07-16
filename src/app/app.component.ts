import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { PersonalInfo } from './models/personalInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @Input() currentInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: 0,
  };
  currentStep: number = 1;
  data: any;
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: 1234456789,
  };
  selectedPlan: string = '';
  planTime: string = '';
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}
  onNextStep(pi: PersonalInfo) {
    this.dataService.savePersonalData(pi);
    this.currentStep++;
  }
  onPreviousStep() {
    this.personalInfo = this.dataService.getPersonalInfo();
    this.currentStep--;
  }
  onSubmit() {
    this.currentStep++;
  }
  nextToAddOns(sel: { time: string; plan: string; price: number }) {
    this.selectedPlan = sel.plan;
    this.planTime = sel.time;
    this.currentStep++;
  }
  nextToFinishingUp() {
    this.currentStep++;
  }
}
