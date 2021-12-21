import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTarifaComponent } from './mant-tarifa.component';

describe('MantTarifaComponent', () => {
  let component: MantTarifaComponent;
  let fixture: ComponentFixture<MantTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantTarifaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
