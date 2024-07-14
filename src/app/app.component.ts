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
    if (this.currentStep > 5) return;
    this.currentStep++;
  }

  submitPersonalInfo() {}
}
