import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Plans } from '../models/plans';
import { PersonalInfo } from '../models/personalInfo';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: Observable<any> | undefined;
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: undefined,
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
}
