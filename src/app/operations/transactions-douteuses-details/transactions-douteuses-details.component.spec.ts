import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDouteusesDetailsComponent } from './transactions-douteuses-details.component';

describe('TransactionsDouteusesDetailsComponent', () => {
  let component: TransactionsDouteusesDetailsComponent;
  let fixture: ComponentFixture<TransactionsDouteusesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDouteusesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDouteusesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
