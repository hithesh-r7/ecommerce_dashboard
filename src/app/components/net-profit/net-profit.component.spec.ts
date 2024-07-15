import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetProfitComponent } from './net-profit.component';

describe('NetProfitComponent', () => {
  let component: NetProfitComponent;
  let fixture: ComponentFixture<NetProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetProfitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
