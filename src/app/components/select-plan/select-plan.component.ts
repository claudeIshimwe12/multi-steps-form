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
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.data = res;
    });
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
}
