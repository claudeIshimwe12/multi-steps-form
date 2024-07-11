import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAdOnsComponent } from './choose-ad-ons.component';

describe('ChooseAdOnsComponent', () => {
  let component: ChooseAdOnsComponent;
  let fixture: ComponentFixture<ChooseAdOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseAdOnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseAdOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
