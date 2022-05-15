import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmParcelComponent } from './confirm-parcel.component';

describe('ConfirmParcelComponent', () => {
  let component: ConfirmParcelComponent;
  let fixture: ComponentFixture<ConfirmParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmParcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
