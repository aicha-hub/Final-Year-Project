import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFatcaComponent } from './details-fatca.component';

describe('DetailsFatcaComponent', () => {
  let component: DetailsFatcaComponent;
  let fixture: ComponentFixture<DetailsFatcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFatcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFatcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
