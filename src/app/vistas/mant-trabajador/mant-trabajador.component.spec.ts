import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTrabajadorComponent } from './mant-trabajador.component';

describe('MantTrabajadorComponent', () => {
  let component: MantTrabajadorComponent;
  let fixture: ComponentFixture<MantTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
