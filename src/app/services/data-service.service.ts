import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Plans } from '../models/plans';
import { PersonalInfo } from '../models/personalInfo';
import { AddOns } from '../models/addons';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: Observable<Plans> | undefined;
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: 0,
  };

  plans: Plans = {
    plans: [
      {
        plan: '',
        icon: '',
        pricePerMonth: 0,
        addOns: {
          onlineService: 0,
          customizableProfile: 0,
          largelStorage: 0,
        },
      },
    ],
  };
  selectedPlan: string = '';
  planTime: string = 'monthly';
  planPrice: number | undefined = 0;
  addOns: AddOns[] = [];
  constructor(private http: HttpClient) {}

  getData(): Observable<Plans> {
    return this.http.get<Plans>('./assets/data.json');
  }

  savePersonalData(data: PersonalInfo): void {
    this.personalInfo = data;
  }
  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }
  setSelectedPlan(s: string, t: string, price: number): void {
    this.selectedPlan = s;
    this.planTime = t;
    this.planPrice = price;
  }
  getSelectedPlan() {
    console.log('get', this.planPrice);
    return {
      plan: this.selectedPlan,
      time: this.planTime,
      price: this.planPrice,
    };
  }
  setAddOns(ads: AddOns[]) {
    this.addOns = ads;
  }
  getAddons(): AddOns[] {
    return this.addOns;
  }
}
