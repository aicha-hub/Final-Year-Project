import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserCompteComponent } from './visualiser-compte.component';

describe('VisualiserCompteComponent', () => {
  let component: VisualiserCompteComponent;
  let fixture: ComponentFixture<VisualiserCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiserCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiserCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
