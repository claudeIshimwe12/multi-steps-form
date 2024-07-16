import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Plan } from '../../models/plan';
import { Plans } from '../../models/plans';

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent implements OnInit {
  @Output() Onprev: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  data: Plans = {
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
  planTime: string = 'monthly';
  selectedPlan: string = '';
  price: number = 0;
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.data = res;
    });
    const previousData = this.dataService.getSelectedPlan();
    this.planTime = previousData.time;
    this.selectedPlan = previousData.plan;
  }

  prev() {
    this.Onprev.emit();
  }

  onToggleMo() {
    this.planTime == 'monthly' ? (this.planTime = 'yearly') : 'monthly';
  }
  onToggleY() {
    this.planTime == 'yearly' ? (this.planTime = 'monthly') : 'yearly';
  }

  onSelectPlan(plan: string, price: number) {
    this.selectedPlan = plan;
    this.price = price;
  }
  next() {
    this.dataService.setSelectedPlan(
      this.selectedPlan,
      this.planTime,
      this.price
    );

    this.onNext.emit({
      time: this.planTime,
      plan: this.selectedPlan,
      price: this.price,
    });
  }
}
