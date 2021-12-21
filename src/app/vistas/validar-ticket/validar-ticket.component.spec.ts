import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarTicketComponent } from './validar-ticket.component';

describe('ValidarTicketComponent', () => {
  let component: ValidarTicketComponent;
  let fixture: ComponentFixture<ValidarTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
