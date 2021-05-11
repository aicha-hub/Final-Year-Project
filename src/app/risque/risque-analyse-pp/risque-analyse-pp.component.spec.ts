import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueAnalysePPComponent } from './risque-analyse-pp.component';

describe('RisqueAnalysePPComponent', () => {
  let component: RisqueAnalysePPComponent;
  let fixture: ComponentFixture<RisqueAnalysePPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueAnalysePPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisqueAnalysePPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
