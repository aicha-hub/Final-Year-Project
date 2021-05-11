import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauRisqueComponent } from './niveau-risque.component';

describe('NiveauRisqueComponent', () => {
  let component: NiveauRisqueComponent;
  let fixture: ComponentFixture<NiveauRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauRisqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
