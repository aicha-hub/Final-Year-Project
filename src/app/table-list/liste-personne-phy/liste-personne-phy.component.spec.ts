import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnePhyComponent } from './liste-personne-phy.component';

describe('ListePersonnePhyComponent', () => {
  let component: ListePersonnePhyComponent;
  let fixture: ComponentFixture<ListePersonnePhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePersonnePhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePersonnePhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
