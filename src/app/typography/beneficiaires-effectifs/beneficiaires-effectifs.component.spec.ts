import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairesEffectifsComponent } from './beneficiaires-effectifs.component';

describe('BeneficiairesEffectifsComponent', () => {
  let component: BeneficiairesEffectifsComponent;
  let fixture: ComponentFixture<BeneficiairesEffectifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiairesEffectifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiairesEffectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
