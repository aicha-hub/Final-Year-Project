import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauxBordsComponent } from './tableaux-bords.component';

describe('TableauxBordsComponent', () => {
  let component: TableauxBordsComponent;
  let fixture: ComponentFixture<TableauxBordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauxBordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauxBordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
