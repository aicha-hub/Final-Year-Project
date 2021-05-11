import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFatcaPPComponent } from './details-fatca-pp.component';

describe('DetailsFatcaPPComponent', () => {
  let component: DetailsFatcaPPComponent;
  let fixture: ComponentFixture<DetailsFatcaPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFatcaPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFatcaPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
