import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvertureCompteComponent } from './ouverture-compte.component';

describe('OuvertureCompteComponent', () => {
  let component: OuvertureCompteComponent;
  let fixture: ComponentFixture<OuvertureCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvertureCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvertureCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
