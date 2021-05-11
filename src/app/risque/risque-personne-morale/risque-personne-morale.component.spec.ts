import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquePersonneMoraleComponent } from './risque-personne-morale.component';

describe('RisquePersonneMoraleComponent', () => {
  let component: RisquePersonneMoraleComponent;
  let fixture: ComponentFixture<RisquePersonneMoraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisquePersonneMoraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisquePersonneMoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
