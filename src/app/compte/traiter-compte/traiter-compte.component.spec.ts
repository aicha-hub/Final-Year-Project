import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterCompteComponent } from './traiter-compte.component';

describe('TraiterCompteComponent', () => {
  let component: TraiterCompteComponent;
  let fixture: ComponentFixture<TraiterCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
