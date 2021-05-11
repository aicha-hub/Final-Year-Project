import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterComptePPComponent } from './traiter-compte-pp.component';

describe('TraiterComptePPComponent', () => {
  let component: TraiterComptePPComponent;
  let fixture: ComponentFixture<TraiterComptePPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterComptePPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterComptePPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
