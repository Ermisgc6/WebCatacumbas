import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCargoComponent } from './mant-cargo.component';

describe('MantCargoComponent', () => {
  let component: MantCargoComponent;
  let fixture: ComponentFixture<MantCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
