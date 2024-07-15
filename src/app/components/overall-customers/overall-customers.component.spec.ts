import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallCustomersComponent } from './overall-customers.component';

describe('OverallCustomersComponent', () => {
  let component: OverallCustomersComponent;
  let fixture: ComponentFixture<OverallCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverallCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
