import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { AddOns } from '../../models/addons';
import { Plan } from '../../models/plan';

@Component({
  selector: 'finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css',
})
export class FinishingUpComponent implements OnInit {
  @Output() OnPrev: EventEmitter<any> = new EventEmitter();
  @Output() OnSubmit: EventEmitter<any> = new EventEmitter();
  addOns: AddOns[] = [];
  selectedPlan: any;
  total: number = 0;
  totalAddons: number | undefined;
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.addOns = this.dataService.getAddons();
    this.selectedPlan = this.dataService.getSelectedPlan();
  }

  prev() {
    this.OnPrev.emit();
  }
  onConfirm() {
    this.OnSubmit.emit();
  }
}
