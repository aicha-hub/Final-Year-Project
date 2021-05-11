import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsDouteusesComponent } from './operations-douteuses.component';

describe('OperationsDouteusesComponent', () => {
  let component: OperationsDouteusesComponent;
  let fixture: ComponentFixture<OperationsDouteusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsDouteusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsDouteusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
