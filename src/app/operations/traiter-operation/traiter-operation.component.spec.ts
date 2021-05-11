import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterOperationComponent } from './traiter-operation.component';

describe('TraiterOperationComponent', () => {
  let component: TraiterOperationComponent;
  let fixture: ComponentFixture<TraiterOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
