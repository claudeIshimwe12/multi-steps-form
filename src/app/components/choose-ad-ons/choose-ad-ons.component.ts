import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Plan } from '../../models/plan';
import { DataServiceService } from '../../services/data-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AddOns } from '../../models/addons';

@Component({
  selector: 'choose-ad-ons',
  templateUrl: './choose-ad-ons.component.html',
  styleUrl: './choose-ad-ons.component.css',
})
export class ChooseAdOnsComponent implements OnInit, AfterViewInit {
  @Output() OnNext: EventEmitter<any> = new EventEmitter();
  @Output() OnPrev: EventEmitter<any> = new EventEmitter();
  selectedPlan: Plan | undefined = {
    plan: '',
    icon: '',
    pricePerMonth: 0,
    addOns: {
      onlineService: 0,
      largelStorage: 0,
      customizableProfile: 0,
    },
  };
  onlineService = new FormControl(false, {
    updateOn: 'change',
  });
  largelStorage = new FormControl(false, {
    updateOn: 'change',
  });
  customizableProfile = new FormControl(false, {
    updateOn: 'change',
  });
  form = new FormGroup({
    onlineService: this.onlineService,
    largelStorage: this.largelStorage,
    customizableProfile: this.customizableProfile,
  });
  planInfo: { plan: string; time: string } = { plan: '', time: '' };
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.selectedPlan = res.plans.find((p) => p.plan == this.planInfo.plan);
    });
    this.planInfo = this.dataService.getSelectedPlan();
    const prevAddons = this.dataService.getAddons();
    prevAddons.forEach((addon) => {
      if (addon.name == 'Customizable Profile')
        this.customizableProfile.setValue(true);
      if (addon.name == 'Online Service') this.onlineService.setValue(true);

      if (addon.name == 'Largel Storage') this.largelStorage.setValue(true);
    });
  }

  ngAfterViewInit(): void {}
  onChooseAddOn(e: MouseEvent) {}

  prev() {
    this.OnPrev.emit();
  }
  next() {
    const addedAddons: AddOns[] = [];
    if (this.customizableProfile.value)
      addedAddons.push({
        name: 'Customizable Profile',
        price: this.selectedPlan?.addOns.customizableProfile,
      });
    if (this.onlineService.value)
      addedAddons.push({
        name: 'Online Service',
        price: this.selectedPlan?.addOns.onlineService,
      });
    if (this.largelStorage.value)
      addedAddons.push({
        name: 'Largel Storage',
        price: this.selectedPlan?.addOns.largelStorage,
      });
    this.dataService.setAddOns(addedAddons);
    this.OnNext.emit();
  }
}
