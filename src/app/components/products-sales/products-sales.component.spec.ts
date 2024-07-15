import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSalesComponent } from './products-sales.component';

describe('ProductsSalesComponent', () => {
  let component: ProductsSalesComponent;
  let fixture: ComponentFixture<ProductsSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
