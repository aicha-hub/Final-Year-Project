import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParClientComponent } from './transaction-par-client.component';

describe('TransactionParClientComponent', () => {
  let component: TransactionParClientComponent;
  let fixture: ComponentFixture<TransactionParClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionParClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
