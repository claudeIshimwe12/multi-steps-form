import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../utils/phone-number-validator';
import { DataServiceService } from '../../services/data-service.service';
import { PersonalInfo } from '../../models/personalInfo';
@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent implements OnInit, AfterViewInit {
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() prev: EventEmitter<any> = new EventEmitter();
  @Input() currentStep: number = 1;
  @Input() currentInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: undefined,
  };

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.currentInfo = this.dataService.getPersonalInfo();
  }
  name = new FormControl(this.currentInfo.name, {
    validators: [Validators.required],
  });

  email = new FormControl(this.currentInfo.email, {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });
  phone = new FormControl(this.currentInfo.phone, {
    validators: [Validators.required, phoneNumberValidator()],
    updateOn: 'change',
  });
  form = new FormGroup({
    name: this.name,
    email: this.email,
    phone: this.phone,
  });
  ngAfterViewInit(): void {
    this.form.setValue({
      name: this.currentInfo.name,
      email: this.currentInfo.email,
      phone: this.currentInfo.phone,
    });
  }
  OnNextStep() {
    if (this.form.valid) {
      this.next.emit(this.form.value);
    } else {
      this.validateForm();
    }
    console.log(this.form.value);
  }
  onPreviousStep() {
    this.name.updateValueAndValidity({ onlySelf: true });
    console.log(this.name.value, this.email.value);
    this.prev.emit();
  }
  validateForm() {
    // loop through the every input and mak as touched
    Object.keys(this.form.controls).forEach((field) => {
      const control: any = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
