import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPMComponent } from './details-pm.component';

describe('DetailsPMComponent', () => {
  let component: DetailsPMComponent;
  let fixture: ComponentFixture<DetailsPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
