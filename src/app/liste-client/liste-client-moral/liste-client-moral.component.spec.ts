import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientMoralComponent } from './liste-client-moral.component';

describe('ListeClientMoralComponent', () => {
  let component: ListeClientMoralComponent;
  let fixture: ComponentFixture<ListeClientMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeClientMoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClientMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
