import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepPMComponent } from './pep-pm.component';

describe('PepPMComponent', () => {
  let component: PepPMComponent;
  let fixture: ComponentFixture<PepPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
